import os
import re
import asyncio
from pymongo import MongoClient
from dotenv import load_dotenv

# Load env variables from backend/.env
env_path = os.path.join(os.path.dirname(__file__), "backend", ".env")
if os.path.exists(env_path):
    load_dotenv(env_path)
else:
    load_dotenv()

MONGO_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "canadian_institutions")

print(f"Connecting to MongoDB at: {MONGO_URL}, database: {DB_NAME}")
client = MongoClient(MONGO_URL)
db = client[DB_NAME]

# Clean existing accommodations
db.accommodations.delete_many({})
db.housing_inquiries.delete_many({})

# Fetch seeded institutions to link them dynamically
institutions = list(db.institutions.find({}, {"_id": 1, "name": 1, "city": 1, "province": 1, "country": 1}))
print(f"Found {len(institutions)} institutions to link.")

# Map from city to institutions
city_inst_map = {}
for inst in institutions:
    city = inst["city"].lower().strip()
    if city not in city_inst_map:
        city_inst_map[city] = []
    city_inst_map[city].append(inst)

# Standard mock housing data template
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

# We will copy templates and multiply them to fit different universities in those cities
accommodations_to_insert = []

for template in housing_templates:
    city_key = template["city"].lower().strip()
    matched_institutions = city_inst_map.get(city_key, [])
    
    if not matched_institutions:
        # Fallback if no matching seeded university in that city: link to any
        matched_institutions = institutions[:1]
        
    # Build slug
    slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', template["name"].lower().replace(" ", "-")))
    
    # Compile nearby universities
    nearby = []
    for inst in matched_institutions:
        # Calculate mock distance (ranging from 0.4 to 2.5 km)
        distance = round(0.4 + (len(nearby) * 0.5), 1)
        commute_time = int(distance * 10) if distance < 1.2 else int(distance * 6)
        commute_mode = "walk" if distance < 1.2 else "bus"
        
        nearby.append({
            "institution_id": inst["_id"],
            "institution_name": inst["name"],
            "distance_km": distance,
            "commute_time_mins": commute_time,
            "commute_mode": commute_mode
        })
        
    acc_doc = template.copy()
    acc_doc["slug"] = slug
    acc_doc["nearby_universities"] = nearby
    accommodations_to_insert.append(acc_doc)

# Let's add extra ones so we have more items
for i in range(1, 6):
    original = housing_templates[i % len(housing_templates)]
    name = f"{original['name']} Annex {i}"
    slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', name.lower().replace(" ", "-")))
    
    # Shift prices slightly
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
            "institution_name": inst["name"],
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
        "nearby_universities": nearby
    }
    accommodations_to_insert.append(acc_doc)

db.accommodations.insert_many(accommodations_to_insert)
print(f"Successfully seeded {len(accommodations_to_insert)} accommodations.")
client.close()
