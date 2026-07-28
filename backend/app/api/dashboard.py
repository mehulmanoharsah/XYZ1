"""
Dashboard routes (authenticated):
  GET  /api/dashboard/search-history
  GET  /api/dashboard/recently-viewed
  POST /api/dashboard/recently-viewed/{institution_id}
"""

from datetime import datetime, timezone

from fastapi import APIRouter, Depends

from app.middleware.auth_middleware import get_current_user
from app.supabase import supabase

router = APIRouter(prefix="/api/dashboard", tags=["Dashboard"])


# ── GET /api/dashboard/search-history ────────────────────────────────
@router.get("/search-history", summary="Last 20 searches by the current user")
async def get_search_history(
    current_user: dict = Depends(get_current_user),
):
    response = (
        supabase.table("search_history")
        .select("*")
        .eq("user_id", current_user["id"])
        .order("created_at", desc=True)
        .limit(20)
        .execute()
    )

    return response.data


# ── GET /api/dashboard/recently-viewed ───────────────────────────────
@router.get("/recently-viewed", summary="Up to 10 recently viewed institutions")
async def get_recently_viewed(
    current_user: dict = Depends(get_current_user),
):
    return current_user.get("recently_viewed", [])


# ── POST /api/dashboard/recently-viewed/{institution_id} ─────────────
@router.post(
    "/recently-viewed/{institution_id}",
    summary="Record a page view for an institution",
)
async def record_recently_viewed(
    institution_id: str,
    current_user: dict = Depends(get_current_user),
):
    # Look up the institution
    response = (
        supabase.table("universities")
        .select("id,name,city,province,country")
        .eq("id", institution_id)
        .limit(1)
        .execute()
    )

    if not response.data:
        return {"message": "Institution not found — view not recorded."}

    inst = response.data[0]

    entry = {
        "id": inst["id"],
        "name": inst.get("name"),
        "city": inst.get("city"),
        "province": inst.get("province"),
        "country": inst.get("country"),
        "viewed_at": datetime.now(timezone.utc).isoformat(),
    }

    # Maintain a deduplicated, most-recent-first list capped at 10
    recent = current_user.get("recently_viewed", [])

    recent = [item for item in recent if item.get("id") != entry["id"]]
    recent.insert(0, entry)
    recent = recent[:10]

    (
        supabase.table("users")
        .update({"recently_viewed": recent})
        .eq("id", current_user["id"])
        .execute()
    )

    return {
        "message": "Recorded.",
        "entry": entry,
    }