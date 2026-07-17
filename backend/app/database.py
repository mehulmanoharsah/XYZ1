from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.config import get_settings

settings = get_settings()

_client: AsyncIOMotorClient | None = None
_db: AsyncIOMotorDatabase | None = None


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
    await _db.users.create_index("email", unique=True)
    await _db.favorites.create_index(
        [("user_id", 1), ("institution_id", 1)], unique=True
    )
    await _db.search_history.create_index("user_id")
    await _db.search_history.create_index("created_at")

    # 1. Backfill missing slugs for institutions
    import re
    cursor = _db.institutions.find({"slug": {"$exists": False}})
    async for doc in cursor:
        name = doc.get("name", "")
        slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', name.lower().replace(" ", "-")))
        await _db.institutions.update_one({"_id": doc["_id"]}, {"$set": {"slug": slug}})

    # 2. Ensure indexes on institutions and programs
    await _db.institutions.create_index("slug", unique=True)
    await _db.institutions.create_index("country")
    await _db.institutions.create_index("name")
    await _db.institutions.create_index("province")
    await _db.institutions.create_index("city")
    await _db.institutions.create_index("type")

    await _db.programs.create_index("institution_id")
    await _db.programs.create_index("institution_name")
    await _db.programs.create_index("level")

    # Ensure indexes on accommodations & inquiries
    await _db.accommodations.create_index("slug", unique=True)
    await _db.accommodations.create_index("country")
    await _db.accommodations.create_index("city")
    await _db.accommodations.create_index("type")
    await _db.accommodations.create_index("nearby_universities.institution_id")
    await _db.housing_inquiries.create_index("user_id")

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
