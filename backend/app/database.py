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

    print(f"✅  MongoDB connected → {settings.db_name}")


async def close_db() -> None:
    global _client
    if _client:
        _client.close()
        print("MongoDB connection closed.")


def get_db() -> AsyncIOMotorDatabase:
    if _db is None:
        raise RuntimeError("Database not initialised — call connect_db() first.")
    return _db
