from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.config import get_settings

settings = get_settings()

_client: AsyncIOMotorClient | None = None
_db: AsyncIOMotorDatabase | None = None


async def safe_create_index(collection, *args, **kwargs) -> None:
    try:
        await collection.create_index(*args, **kwargs)
    except Exception as e:
        print(f"⚠️ Warning: Could not create index on {collection.name}: {e}")


async def connect_db() -> None:
    global _client, _db
    _client = AsyncIOMotorClient(
        settings.mongodb_url,
        serverSelectionTimeoutMS=5000,
    )
    _db = _client[settings.db_name]

    # Verify connection
    await _client.admin.command("ping")

    # Ensure indexes on user-managed collections
    await safe_create_index(_db.users, "email", unique=True)
    await safe_create_index(_db.favorites, [("user_id", 1), ("institution_id", 1)], unique=True)
    await safe_create_index(_db.search_history, "user_id")
    await safe_create_index(_db.search_history, "created_at")

    # 1. Backfill missing slugs for institutions
    import re
    cursor = _db.institutions.find({"slug": {"$exists": False}})
    async for doc in cursor:
        name = doc.get("name", "")
        slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', name.lower().replace(" ", "-")))
        await _db.institutions.update_one({"_id": doc["_id"]}, {"$set": {"slug": slug}})

    # 2. Ensure indexes on institutions and programs
    await safe_create_index(_db.institutions, "slug", unique=True)
    await safe_create_index(_db.institutions, "country")
    await safe_create_index(_db.institutions, "name")
    await safe_create_index(_db.institutions, "province")
    await safe_create_index(_db.institutions, "city")
    await safe_create_index(_db.institutions, "type")

    await safe_create_index(_db.programs, "institution_id")
    await safe_create_index(_db.programs, "institution_name")
    await safe_create_index(_db.programs, "level")

    # Ensure indexes on accommodations & inquiries
    await safe_create_index(_db.accommodations, "slug", unique=True)
    await safe_create_index(_db.accommodations, "country")
    await safe_create_index(_db.accommodations, "city")
    await safe_create_index(_db.accommodations, "type")
    await safe_create_index(_db.accommodations, "nearby_universities.institution_id")
    await safe_create_index(_db.housing_inquiries, "user_id")

    # Rename 'Knaresborough Residence' to 'Knaresborough' if it exists
    try:
        await _db.accommodations.update_one(
            {"name": "Knaresborough Residence"},
            {"$set": {
                "name": "Knaresborough",
                "slug": "knaresborough",
                "description": "Knaresborough offers comfortable, modern co-living student accommodation at 25 Knaresborough Drive. Rent includes all utility bills (electricity, heating, water, and high-speed internet), making budgeting easy for students. Conveniently located near public transport for commute to London universities."
            }}
        )
    except Exception as e:
        print(f"⚠️ Failed to rename Knaresborough Residence: {e}")

    # Auto-seed accommodations if collection is empty
    accomm_count = await _db.accommodations.count_documents({})
    if accomm_count == 0:
        print("Empty accommodations collection detected. Auto-seeding accommodations...")
        try:
            await auto_seed_accommodations(_db)
        except Exception as e:
            print(f"⚠️ Failed to auto-seed accommodations: {e}")

    print(f"✅  MongoDB connected → {settings.db_name} and indexes verified")


async def close_db() -> None:
    global _client
    if _client:
        _client.close()
        print("MongoDB connection closed.")


def get_db() -> AsyncIOMotorDatabase:
    if _db is None:
        raise RuntimeError("Database not initialised — call connect_db() first.")
    return _db


async def auto_seed_accommodations(db: AsyncIOMotorDatabase) -> None:
    import re
    # Fetch seeded institutions to link them dynamically
    institutions = []
    cursor = db.institutions.find({}, {"_id": 1, "name": 1, "city": 1, "province": 1, "country": 1})
    async for inst in cursor:
        institutions.append(inst)

    if not institutions:
        print("⚠️ No institutions found in database, cannot link accommodations.")
        return

    # Map from city to institutions
    city_inst_map = {}
    for inst in institutions:
        city = inst.get("city", "").lower().strip()
        if city not in city_inst_map:
            city_inst_map[city] = []
        city_inst_map[city].append(inst)

    housing_templates = [
        {
            "name": "Sheridan Hall Residence",
            "type": "residence_hall",
            "city": "Toronto",
            "province": "Ontario",
            "country": "Canada",
            "address": "455 Spadina Ave, Toronto, ON, M5S 2G8",
            "price_per_month_cad": 950,
            "room_types": [
                {
                    "name": "Single Studio Suite",
                    "price_per_month": 1250,
                    "available_rooms": 4,
                    "amenities": ["En-suite Bathroom", "Private Kitchenette", "Desk & Chair"]
                },
                {
                    "name": "Shared Quad Room",
                    "price_per_month": 750,
                    "available_rooms": 16,
                    "amenities": ["Shared Bathroom", "Study Desk"]
                },
                {
                    "name": "Standard Double Room",
                    "price_per_month": 950,
                    "available_rooms": 8,
                    "amenities": ["Shared Bathroom", "Mini Fridge"]
                }
            ],
            "amenities": [
                "High-Speed Wi-Fi", "24/7 Gym", "Study Lounge", "Laundry", 
                "24/7 Security", "Fully Furnished", "Bike Storage", "Cinema Room"
            ],
            "rules": {
                "guest_policy": "Allowed until 11 PM",
                "quiet_hours": "10 PM - 7 AM",
                "pets_allowed": False
            },
            "rating": 4.8,
            "reviews_count": 212,
            "description": "Sheridan Hall is a premier student residence located in the heart of downtown Toronto. It is designed to offer maximum study-life balance with premium lounges, a cinema room, and round-the-clock secure entry.",
            "images": [
                "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            "name": "Pacific Crest Hostels",
            "type": "hostel",
            "city": "Vancouver",
            "province": "British Columbia",
            "country": "Canada",
            "address": "1083 W Georgia St, Vancouver, BC, V6E 4S6",
            "price_per_month_cad": 820,
            "room_types": [
                {
                    "name": "Standard Shared Dorm (En-suite)",
                    "price_per_month": 820,
                    "available_rooms": 10,
                    "amenities": ["Locker", "Shared Bathroom", "Under-bed Storage"]
                },
                {
                    "name": "Private Single Room",
                    "price_per_month": 1150,
                    "available_rooms": 5,
                    "amenities": ["Private Closet", "Study Desk", "En-suite Bathroom"]
                }
            ],
            "amenities": [
                "High-Speed Wi-Fi", "Rooftop Terrace", "Shared Kitchen", 
                "Laundry", "Social Lounge", "Fully Furnished", "Secure Keycard"
            ],
            "rules": {
                "guest_policy": "No overnight guests",
                "quiet_hours": "11 PM - 8 AM",
                "pets_allowed": False
            },
            "rating": 4.5,
            "reviews_count": 142,
            "description": "Pacific Crest offers student-focused, budget-friendly hostel rooms in scenic Vancouver. With a spectacular rooftop terrace and massive communal kitchens, it is perfect for international students looking to network and build friendships.",
            "images": [
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            "name": "Waterloo Student Hub Apartments",
            "type": "apartment",
            "city": "Waterloo",
            "province": "Ontario",
            "country": "Canada",
            "address": "250 Albert St, Waterloo, ON, N2L 3V3",
            "price_per_month_cad": 780,
            "room_types": [
                {
                    "name": "Shared 4-Bedroom Apartment Unit",
                    "price_per_month": 780,
                    "available_rooms": 8,
                    "amenities": ["Common Kitchen", "Living Room", "In-suite Laundry"]
                },
                {
                    "name": "Premium Bachelor Studio",
                    "price_per_month": 1050,
                    "available_rooms": 2,
                    "amenities": ["In-suite Laundry", "Balcony", "Kitchen"]
                }
            ],
            "amenities": [
                "High-Speed Wi-Fi", "Study Labs", "Game Room", "Laundry",
                "Underground Parking", "Fully Furnished", "Utilities Included"
            ],
            "rules": {
                "guest_policy": "Guests allowed with roommate consent",
                "quiet_hours": "10 PM - 8 AM",
                "pets_allowed": True
            },
            "rating": 4.6,
            "reviews_count": 98,
            "description": "Premium student apartments fully furnished and optimized for Waterloo students. Units feature shared kitchens and living spaces with in-suite laundry, meaning you do not have to carry baskets downstairs.",
            "images": [
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            "name": "Mont-Royal Co-Living Rooms",
            "type": "homestay",
            "gender_policy": "female_only",
            "city": "Montreal",
            "province": "Quebec",
            "country": "Canada",
            "address": "4220 Rue de Brébeuf, Montreal, QC, H2J 3K7",
            "price_per_month_cad": 680,
            "room_types": [
                {
                    "name": "Cozy Single Room",
                    "price_per_month": 680,
                    "available_rooms": 3,
                    "amenities": ["Study Desk", "Shared Bathroom", "Closet"]
                },
                {
                    "name": "Master Room with Balcony",
                    "price_per_month": 820,
                    "available_rooms": 1,
                    "amenities": ["Private Balcony", "Closet", "Desk"]
                }
            ],
            "amenities": [
                "High-Speed Wi-Fi", "Shared Kitchen", "Backyard Garden", 
                "Fully Furnished", "Heating Included", "Quiet Study Area"
            ],
            "rules": {
                "guest_policy": "Quiet guests only, no parties",
                "quiet_hours": "10:30 PM - 7:30 AM",
                "pets_allowed": False
            },
            "rating": 4.9,
            "reviews_count": 67,
            "description": "Enjoy a warm and quiet Montreal vibe in our Mont-Royal Co-Living house. Located in a charming residential street with a private garden, it is ideal for students who want a calm space for intensive studies.",
            "images": [
                "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            "name": "Algoma Pine Residence",
            "type": "residence_hall",
            "city": "Sault Ste. Marie",
            "province": "Ontario",
            "country": "Canada",
            "address": "1520 Queen St E, Sault Ste. Marie, ON, P6A 2G4",
            "price_per_month_cad": 600,
            "room_types": [
                {
                    "name": "Standard Dormitory Room",
                    "price_per_month": 600,
                    "available_rooms": 20,
                    "amenities": ["Shared Bathroom", "High-speed Wi-Fi"]
                },
                {
                    "name": "Private Single Room",
                    "price_per_month": 800,
                    "available_rooms": 10,
                    "amenities": ["En-suite Bathroom", "Study Desk"]
                }
            ],
            "amenities": [
                "High-Speed Wi-Fi", "Meal Plans Available", "Gym Access", "Laundry",
                "Game Room", "Fully Furnished", "On-campus location"
            ],
            "rules": {
                "guest_policy": "Guests check-in at front desk",
                "quiet_hours": "11 PM - 7 AM",
                "pets_allowed": False
            },
            "rating": 4.4,
            "reviews_count": 34,
            "description": "Algoma Pine Residence offers simple, budget-conscious dormitory rooms located directly on-campus. Perfect for freshmen, the facility includes meal plan options, a game room, and gym facilities.",
            "images": [
                "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
            ]
        }
    ]

    accommodations_to_insert = []
    for template in housing_templates:
        city_key = template["city"].lower().strip()
        matched_institutions = city_inst_map.get(city_key, [])
        if not matched_institutions:
            matched_institutions = institutions[:1]

        slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', template["name"].lower().replace(" ", "-")))

        nearby = []
        for inst in matched_institutions:
            distance = round(0.4 + (len(nearby) * 0.5), 1)
            commute_time = int(distance * 10) if distance < 1.2 else int(distance * 6)
            commute_mode = "walk" if distance < 1.2 else "bus"

            nearby.append({
                "institution_id": inst["_id"],
                "institution_name": inst.get("name", ""),
                "distance_km": distance,
                "commute_time_mins": commute_time,
                "commute_mode": commute_mode
            })

        acc_doc = template.copy()
        acc_doc["slug"] = slug
        acc_doc["nearby_universities"] = nearby
        if "gender_policy" not in acc_doc:
            acc_doc["gender_policy"] = "any"
        accommodations_to_insert.append(acc_doc)

    for i in range(1, 6):
        original = housing_templates[i % len(housing_templates)]
        name = f"{original['name']} Annex {i}"
        slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', name.lower().replace(" ", "-")))

        new_price = original["price_per_month_cad"] + (i * 20)
        new_room_types = []
        for rt in original["room_types"]:
            nrt = rt.copy()
            nrt["price_per_month"] += (i * 20)
            new_room_types.append(nrt)

        city_key = original["city"].lower().strip()
        matched_institutions = city_inst_map.get(city_key, [])
        if not matched_institutions:
            matched_institutions = institutions[:1]

        nearby = []
        for idx, inst in enumerate(matched_institutions):
            distance = round(1.2 + (idx * 0.3), 1)
            commute_time = int(distance * 8)
            commute_mode = "bus" if distance > 1.5 else "walk"
            nearby.append({
                "institution_id": inst["_id"],
                "institution_name": inst.get("name", ""),
                "distance_km": distance,
                "commute_time_mins": commute_time,
                "commute_mode": commute_mode
            })

        acc_doc = {
            "name": name,
            "slug": slug,
            "type": original["type"],
            "city": original["city"],
            "province": original["province"],
            "country": original["country"],
            "address": f"{i * 12 + 10} Main St, {original['city']}, {original['province']}, Canada",
            "price_per_month_cad": new_price,
            "room_types": new_room_types,
            "amenities": original["amenities"][:-1],
            "rules": original["rules"],
            "rating": round(4.0 + (i * 0.15) % 1.0, 1),
            "reviews_count": original["reviews_count"] - i * 5,
            "description": f"Annex expansion of {original['name']}. Located in the vibrant neighborhoods of {original['city']}, providing excellent links to class.",
            "images": [original["images"][0]],
            "nearby_universities": nearby,
            "gender_policy": "female_only" if i == 4 else original.get("gender_policy", "any")
        }
        accommodations_to_insert.append(acc_doc)

    await db.accommodations.insert_many(accommodations_to_insert)
    print(f"Successfully auto-seeded {len(accommodations_to_insert)} accommodations.")
