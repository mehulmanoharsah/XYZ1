"""
Favorites routes (authenticated):
  GET    /api/favorites            – list user's saved institutions
  POST   /api/favorites            – save an institution
  DELETE /api/favorites/{inst_id}  – remove a saved institution
"""
from datetime import datetime

from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException, status

from app.database import get_db
from app.middleware.auth_middleware import get_current_user
from app.models.schemas import FavoriteCreateRequest, OkResponse
from app.utils.helpers import serialize_doc, serialize_list

router = APIRouter(prefix="/api/favorites", tags=["Favorites"])


# ── GET /api/favorites ────────────────────────────────────────
@router.get("", summary="List all saved institutions for the current user")
async def list_favorites(
    current_user: dict = Depends(get_current_user),
    db=Depends(get_db),
):
    docs = (
        await db.favorites.find({"user_id": current_user["id"]})
        .sort("created_at", -1)
        .to_list(500)
    )
    return serialize_list(docs)


# ── POST /api/favorites ───────────────────────────────────────
@router.post(
    "",
    status_code=status.HTTP_201_CREATED,
    summary="Save an institution to favorites",
)
async def add_favorite(
    payload: FavoriteCreateRequest,
    current_user: dict = Depends(get_current_user),
    db=Depends(get_db),
):
    # Guard against duplicates (unique index also covers this)
    existing = await db.favorites.find_one(
        {
            "user_id": current_user["id"],
            "institution_id": payload.institution_id,
        }
    )
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Institution is already in your favorites.",
        )

    doc = {
        "user_id": current_user["id"],
        "institution_id": payload.institution_id,
        "institution_name": payload.institution_name,
        "city": payload.city,
        "province": payload.province,
        "country": payload.country,
        "created_at": datetime.utcnow(),
    }
    result = await db.favorites.insert_one(doc)
    doc["_id"] = result.inserted_id
    return serialize_doc(doc)


# ── DELETE /api/favorites/{institution_id} ────────────────────
@router.delete(
    "/{institution_id}",
    response_model=OkResponse,
    summary="Remove a saved institution",
)
async def remove_favorite(
    institution_id: str,
    current_user: dict = Depends(get_current_user),
    db=Depends(get_db),
):
    result = await db.favorites.delete_one(
        {
            "user_id": current_user["id"],
            "institution_id": institution_id,
        }
    )
    if result.deleted_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Favorite not found.",
        )
    return OkResponse(message="Removed from favorites.")
