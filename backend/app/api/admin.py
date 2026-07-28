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

from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, Body, Depends, HTTPException, status

from app.middleware.auth_middleware import get_admin_user
from app.supabase import supabase

router = APIRouter(prefix="/api/admin", tags=["Admin"])

_admin = Depends(get_admin_user)


# ─────────────────────────────────────────────────────────────
# Platform statistics
# ─────────────────────────────────────────────────────────────
@router.get("/stats", summary="Platform-wide analytics")
async def get_stats(_=_admin):
    week_ago = (datetime.now(timezone.utc) - timedelta(days=7)).isoformat()

    institutions = (
        supabase.table("universities")
        .select("id", count="exact")
        .limit(1)
        .execute()
    ).count

    users = (
        supabase.table("users")
        .select("id", count="exact")
        .limit(1)
        .execute()
    ).count

    favorites = (
        supabase.table("favorites")
        .select("id", count="exact")
        .limit(1)
        .execute()
    ).count

    searches = (
        supabase.table("search_history")
        .select("id", count="exact")
        .limit(1)
        .execute()
    ).count

    programs = (
        supabase.table("programs")
        .select("id", count="exact")
        .limit(1)
        .execute()
    ).count

    recent_signups = (
        supabase.table("users")
        .select("id", count="exact")
        .gte("created_at", week_ago)
        .execute()
    ).count

    return {
        "institutions": institutions or 0,
        "users": users or 0,
        "favorites": favorites or 0,
        "searches": searches or 0,
        "programs": programs or 0,
        "recent_signups": recent_signups or 0,
    }


# ─────────────────────────────────────────────────────────────
# Institutions
# ─────────────────────────────────────────────────────────────
@router.get("/institutions", summary="Full institution list for admin")
async def admin_list_institutions(_=_admin):
    response = (
        supabase.table("universities")
        .select("id,name,city,province,country,type")
        .order("name")
        .execute()
    )

    return response.data


@router.post(
    "/institutions",
    status_code=status.HTTP_201_CREATED,
    summary="Create a new institution",
)
async def admin_create_institution(
    data: dict = Body(...),
    _=_admin,
):
    data["created_at"] = datetime.now(timezone.utc).isoformat()

    response = (
        supabase.table("universities")
        .insert(data)
        .execute()
    )

    return response.data[0]


@router.put("/institutions/{institution_id}")
async def admin_update_institution(
    institution_id: str,
    data: dict = Body(...),
    _=_admin,
):
    data.pop("id", None)
    data["updated_at"] = datetime.now(timezone.utc).isoformat()

    response = (
        supabase.table("universities")
        .update(data)
        .eq("id", institution_id)
        .execute()
    )

    if not response.data:
        raise HTTPException(
            status_code=404,
            detail="Institution not found.",
        )

    return response.data[0]


@router.delete(
    "/institutions/{institution_id}",
    summary="Delete an institution and its programs",
)
async def admin_delete_institution(
    institution_id: str,
    _=_admin,
):
    existing = (
        supabase.table("universities")
        .select("id")
        .eq("id", institution_id)
        .limit(1)
        .execute()
    )

    if not existing.data:
        raise HTTPException(
            status_code=404,
            detail="Institution not found.",
        )

    (
        supabase.table("universities")
        .delete()
        .eq("id", institution_id)
        .execute()
    )

    (
        supabase.table("programs")
        .delete()
        .eq("institution_id", institution_id)
        .execute()
    )

    return {
        "message": "Institution and its programs deleted."
    }


# ─────────────────────────────────────────────────────────────
# Users
# ─────────────────────────────────────────────────────────────
@router.get("/users", summary="List all registered users")
async def admin_list_users(_=_admin):
    response = (
        supabase.table("users")
        .select("*")
        .order("created_at", desc=True)
        .execute()
    )

    users = response.data

    for user in users:
        user.pop("password", None)

    return users


@router.put("/users/{user_id}/toggle-admin")
async def admin_toggle_admin(
    user_id: str,
    _=_admin,
):
    response = (
        supabase.table("users")
        .select("is_admin")
        .eq("id", user_id)
        .limit(1)
        .execute()
    )

    if not response.data:
        raise HTTPException(
            status_code=404,
            detail="User not found.",
        )

    new_status = not response.data[0].get("is_admin", False)

    (
        supabase.table("users")
        .update({"is_admin": new_status})
        .eq("id", user_id)
        .execute()
    )

    return {
        "message": f"Admin status set to {new_status}.",
        "is_admin": new_status,
    }


@router.delete("/users/{user_id}")
async def admin_delete_user(
    user_id: str,
    _=_admin,
):
    response = (
        supabase.table("users")
        .select("id")
        .eq("id", user_id)
        .limit(1)
        .execute()
    )

    if not response.data:
        raise HTTPException(
            status_code=404,
            detail="User not found.",
        )

    (
        supabase.table("users")
        .delete()
        .eq("id", user_id)
        .execute()
    )

    (
        supabase.table("favorites")
        .delete()
        .eq("user_id", user_id)
        .execute()
    )

    (
        supabase.table("search_history")
        .delete()
        .eq("user_id", user_id)
        .execute()
    )

    return {
        "message": "User deleted."
    }