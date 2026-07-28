"""
Favorites routes (authenticated):
  GET    /api/favorites            – list user's saved institutions
  POST   /api/favorites            – save an institution
  DELETE /api/favorites/{institution_id}  – remove a saved institution
"""

from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, status

from app.middleware.auth_middleware import get_current_user
from app.models.schemas import FavoriteCreateRequest, OkResponse
from app.supabase import supabase

router = APIRouter(prefix="/api/favorites", tags=["Favorites"])


# ── GET /api/favorites ────────────────────────────────────────
@router.get("", summary="List all saved institutions for the current user")
async def list_favorites(
    current_user: dict = Depends(get_current_user),
):
    response = (
        supabase.table("favorites")
        .select("*")
        .eq("user_id", current_user["id"])
        .order("created_at", desc=True)
        .execute()
    )

    return response.data


# ── POST /api/favorites ───────────────────────────────────────
@router.post(
    "",
    status_code=status.HTTP_201_CREATED,
    summary="Save an institution to favorites",
)
async def add_favorite(
    payload: FavoriteCreateRequest,
    current_user: dict = Depends(get_current_user),
):
    # Check for duplicates
    existing = (
        supabase.table("favorites")
        .select("id")
        .eq("user_id", current_user["id"])
        .eq("institution_id", payload.institution_id)
        .limit(1)
        .execute()
    )

    if existing.data:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Institution is already in your favorites.",
        )

    try:
        response = (
            supabase.table("favorites")
            .insert(
                {
                    "user_id": current_user["id"],
                    "institution_id": payload.institution_id,
                    "institution_name": payload.institution_name,
                    "city": payload.city,
                    "province": payload.province,
                    "country": payload.country,
                    "created_at": datetime.now(timezone.utc).isoformat(),
                }
            )
            .execute()
        )

        return response.data[0]

    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Unable to save favorite.",
        )


# ── DELETE /api/favorites/{institution_id} ────────────────────
@router.delete(
    "/{institution_id}",
    response_model=OkResponse,
    summary="Remove a saved institution",
)
async def remove_favorite(
    institution_id: str,
    current_user: dict = Depends(get_current_user),
):
    existing = (
        supabase.table("favorites")
        .select("id")
        .eq("user_id", current_user["id"])
        .eq("institution_id", institution_id)
        .limit(1)
        .execute()
    )

    if not existing.data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Favorite not found.",
        )

    (
        supabase.table("favorites")
        .delete()
        .eq("user_id", current_user["id"])
        .eq("institution_id", institution_id)
        .execute()
    )

    return OkResponse(message="Removed from favorites.")