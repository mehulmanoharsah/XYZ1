"""
Admin routes (admin JWT required):
  GET    /api/admin/stats
  GET    /api/admin/institutions
  POST   /api/admin/institutions
  PUT    /api/admin/institutions/{id}
  DELETE /api/admin/institutions/{id}
  GET    /api/admin/users
  PUT    /api/admin/users/{id}/toggle-admin
  DELETE /api/admin/users/{id}
"""
from datetime import datetime, timedelta

from bson import ObjectId
from fastapi import APIRouter, Body, Depends, HTTPException, status

from app.database import get_db
from app.middleware.auth_middleware import get_admin_user
from app.utils.helpers import serialize_doc, serialize_list

router = APIRouter(prefix="/api/admin", tags=["Admin"])

_admin = Depends(get_admin_user)


# ── GET /api/admin/stats ──────────────────────────────────────
@router.get("/stats", summary="Platform-wide analytics")
async def get_stats(db=Depends(get_db), _=_admin):
    week_ago = datetime.utcnow() - timedelta(days=7)

    institutions, users, favorites, searches, programs, recent_signups = (
        await db.institutions.count_documents({}),
        await db.users.count_documents({}),
        await db.favorites.count_documents({}),
        await db.search_history.count_documents({}),
        await db.programs.count_documents({}),
        await db.users.count_documents({"created_at": {"$gte": week_ago}}),
    )
    return {
        "institutions": institutions,
        "users": users,
        "favorites": favorites,
        "searches": searches,
        "programs": programs,
        "recent_signups": recent_signups,
    }


# ── Institutions CRUD ─────────────────────────────────────────
@router.get("/institutions", summary="Full institution list for admin")
async def admin_list_institutions(db=Depends(get_db), _=_admin):
    docs = (
        await db.institutions.find(
            {}, {"name": 1, "city": 1, "province": 1, "country": 1, "type": 1}
        )
        .sort("name", 1)
        .to_list(1000)
    )
    return serialize_list(docs)


@router.post(
    "/institutions",
    status_code=status.HTTP_201_CREATED,
    summary="Create a new institution",
)
async def admin_create_institution(
    data: dict = Body(...), db=Depends(get_db), _=_admin
):
    data["created_at"] = datetime.utcnow()
    result = await db.institutions.insert_one(data)
    doc = await db.institutions.find_one({"_id": result.inserted_id})
    return serialize_doc(doc)


@router.put("/institutions/{institution_id}", summary="Update an institution")
async def admin_update_institution(
    institution_id: str,
    data: dict = Body(...),
    db=Depends(get_db),
    _=_admin,
):
    if not ObjectId.is_valid(institution_id):
        raise HTTPException(status_code=400, detail="Invalid institution ID.")

    data.pop("_id", None)
    data["updated_at"] = datetime.utcnow()
    result = await db.institutions.update_one(
        {"_id": ObjectId(institution_id)}, {"$set": data}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Institution not found.")

    doc = await db.institutions.find_one({"_id": ObjectId(institution_id)})
    return serialize_doc(doc)


@router.delete(
    "/institutions/{institution_id}",
    summary="Delete an institution and its programs",
)
async def admin_delete_institution(
    institution_id: str, db=Depends(get_db), _=_admin
):
    if not ObjectId.is_valid(institution_id):
        raise HTTPException(status_code=400, detail="Invalid institution ID.")

    result = await db.institutions.delete_one({"_id": ObjectId(institution_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Institution not found.")

    # Cascade-delete programs belonging to this institution
    await db.programs.delete_many({"institution_id": ObjectId(institution_id)})
    return {"message": "Institution and its programs deleted."}


# ── Users management ──────────────────────────────────────────
@router.get("/users", summary="List all registered users")
async def admin_list_users(db=Depends(get_db), _=_admin):
    docs = (
        await db.users.find({}, {"password": 0})
        .sort("created_at", -1)
        .to_list(1000)
    )
    return serialize_list(docs)


@router.put("/users/{user_id}/toggle-admin", summary="Grant or revoke admin rights")
async def admin_toggle_admin(
    user_id: str, db=Depends(get_db), _=_admin
):
    if not ObjectId.is_valid(user_id):
        raise HTTPException(status_code=400, detail="Invalid user ID.")

    user = await db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")

    new_status = not user.get("is_admin", False)
    await db.users.update_one(
        {"_id": ObjectId(user_id)}, {"$set": {"is_admin": new_status}}
    )
    return {
        "message": f"Admin status set to {new_status}.",
        "is_admin": new_status,
    }


@router.delete("/users/{user_id}", summary="Permanently delete a user")
async def admin_delete_user(user_id: str, db=Depends(get_db), _=_admin):
    if not ObjectId.is_valid(user_id):
        raise HTTPException(status_code=400, detail="Invalid user ID.")

    result = await db.users.delete_one({"_id": ObjectId(user_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found.")

    # Clean up related data
    await db.favorites.delete_many({"user_id": user_id})
    await db.search_history.delete_many({"user_id": user_id})
    return {"message": "User deleted."}
