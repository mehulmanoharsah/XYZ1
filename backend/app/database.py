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

    # Clean up mock/fake accommodations (keep only Knaresborough)
    try:
        delete_result = await _db.accommodations.delete_many({"slug": {"$ne": "knaresborough"}})
        if delete_result.deleted_count > 0:
            print(f"Cleaned up {delete_result.deleted_count} mock/fake accommodations.")
    except Exception as e:
        print(f"⚠️ Failed to clean up mock accommodations: {e}")

    # Ensure Knaresborough is seeded and corrected
    try:
        knares_exists = await _db.accommodations.find_one({"slug": "knaresborough"})
        if not knares_exists:
            # Check if it was named Knaresborough Residence
            old_exists = await _db.accommodations.find_one({"name": "Knaresborough Residence"})
            if old_exists:
                await _db.accommodations.update_one(
                    {"name": "Knaresborough Residence"},
                    {"$set": {
                        "name": "Knaresborough",
                        "slug": "knaresborough",
                        "description": "Knaresborough offers comfortable, modern co-living student accommodation at 25 Knaresborough Drive. Rent includes all utility bills (electricity, heating, water, and high-speed internet), making budgeting easy for students. Conveniently located near public transport for commute to London universities."
                    }}
                )
                print("Successfully corrected Knaresborough Residence in the database.")
            else:
                print("Knaresborough accommodation not found. Seeding it...")
                await seed_knaresborough(_db)
    except Exception as e:
        print(f"⚠️ Failed to ensure Knaresborough is seeded: {e}")

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


async def seed_knaresborough(db: AsyncIOMotorDatabase) -> None:
    # Resolve university IDs dynamically
    imperial = await db.institutions.find_one({"name": {"$regex": "Imperial College London", "$options": "i"}})
    kings = await db.institutions.find_one({"name": {"$regex": "King's College London", "$options": "i"}})

    nearby = []
    if imperial:
        nearby.append({
            "institution_id": imperial["_id"],
            "institution_name": imperial["name"],
            "distance_km": 5.4,
            "commute_time_mins": 25,
            "commute_mode": "subway"
        })
    if kings:
        nearby.append({
            "institution_id": kings["_id"],
            "institution_name": kings["name"],
            "distance_km": 6.8,
            "commute_time_mins": 30,
            "commute_mode": "subway"
        })

    knares_doc = {
        "name": "Knaresborough",
        "slug": "knaresborough",
        "type": "homestay",
        "gender_policy": "any",
        "city": "London",
        "province": "England",
        "country": "UK",
        "address": "25 Knaresborough Drive, London, SW18 4UT, UK",
        "price_per_month_cad": 1560,
        "room_types": [{
            "name": "Standard Double Room",
            "price_per_month": 900,
            "available_rooms": 1,
            "amenities": ["Double Bed", "Study Desk", "All Bills Included"]
        }],
        "amenities": ["High-Speed Wi-Fi", "Fully Furnished Kitchen", "Central Heating", "Laundry Access"],
        "rules": {
            "guest_policy": "No overnight guests without notice",
            "quiet_hours": "10 PM - 8 AM",
            "pets_allowed": False
        },
        "rating": 5.0,
        "reviews_count": 1,
        "description": "Knaresborough offers comfortable, modern co-living student accommodation at 25 Knaresborough Drive. Rent includes all utility bills (electricity, heating, water, and high-speed internet), making budgeting easy for students. Conveniently located near public transport for commute to London universities.",
        "images": [
            "/images/knaresborough/image1.jpeg",
            "/images/knaresborough/image2.jpeg",
            "/images/knaresborough/image3.jpeg",
            "/images/knaresborough/image4.jpeg"
        ],
        "nearby_universities": nearby
    }
    await db.accommodations.insert_one(knares_doc)
    print("Successfully seeded Knaresborough accommodation.")
