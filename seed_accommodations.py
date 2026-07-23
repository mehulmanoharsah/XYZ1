import os
import re
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

# Clean existing accommodations and inquiries
print("Cleaning accommodations and inquiries collections...")
db.accommodations.delete_many({})
db.housing_inquiries.delete_many({})

# Resolve university IDs dynamically
imperial = db.institutions.find_one({"name": {"$regex": "Imperial College London", "$options": "i"}})
kings = db.institutions.find_one({"name": {"$regex": "King's College London", "$options": "i"}})

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
    "price_per_month_cad": 900,
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

db.accommodations.insert_one(knares_doc)
print("Successfully seeded Knaresborough accommodation.")
client.close()
