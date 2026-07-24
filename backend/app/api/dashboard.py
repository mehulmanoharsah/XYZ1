"""
Dashboard routes (authenticated):
  GET  /api/dashboard/search-history
  GET  /api/dashboard/recently-viewed
  POST /api/dashboard/recently-viewed/{institution_id}
"""
from datetime import datetime

from bson import ObjectId
from fastapi import APIRouter, Depends

from app.database import get_db
from app.middleware.auth_middleware import get_current_user
from app.utils.helpers import serialize_list

router = APIRouter(prefix="/api/dashboard", tags=["Dashboard"])


# ── GET /api/dashboard/search-history ────────────────────────
@router.get("/search-history", summary="Last 20 searches by the current user")
async def get_search_history(
    current_user: dict = Depends(get_current_user),
    db=Depends(get_db),
):
    docs = (
        await db.search_history.find({"user_id": current_user["id"]})
        .sort("created_at", -1)
        .limit(20)
        .to_list(20)
    )
    return serialize_list(docs)


# ── GET /api/dashboard/recently-viewed ───────────────────────
@router.get("/recently-viewed", summary="Up to 10 recently viewed institutions")
async def get_recently_viewed(
    current_user: dict = Depends(get_current_user),
):
    return current_user.get("recently_viewed", [])


# ── POST /api/dashboard/recently-viewed/{institution_id} ──────
@router.post(
    "/recently-viewed/{institution_id}",
    summary="Record a page view for an institution",
)
async def record_recently_viewed(
    institution_id: str,
    current_user: dict = Depends(get_current_user),
    db=Depends(get_db),
):
    # Look up the institution to get its display info
    query = (
        {"_id": ObjectId(institution_id)}
        if ObjectId.is_valid(institution_id)
        else {"name": {"$regex": institution_id, "$options": "i"}}
    )
    inst = await db.institutions.find_one(
        query, {"name": 1, "city": 1, "province": 1, "country": 1}
    )
    if not inst:
        return {"message": "Institution not found — view not recorded."}

    entry = {
        "id": str(inst["_id"]),
        "name": inst.get("name"),
        "city": inst.get("city"),
        "province": inst.get("province"),
        "country": inst.get("country"),
        "viewed_at": datetime.utcnow().isoformat(),
    }

    # Maintain a deduplicated, most-recent-first list capped at 10
    recent: list = current_user.get("recently_viewed", [])
    recent = [r for r in recent if r.get("id") != entry["id"]]
    recent.insert(0, entry)
    recent = recent[:10]

    await db.users.update_one(
        {"_id": ObjectId(current_user["id"])},
        {"$set": {"recently_viewed": recent}},
    )
    return {"message": "Recorded.", "entry": entry}
