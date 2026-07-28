"""
Authentication routes:
  POST /api/auth/register
  POST /api/auth/login
  GET  /api/auth/me
  PUT  /api/auth/me
  PUT  /api/auth/change-password
"""
from datetime import datetime, timezone
from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException, status
from app.middleware.auth_middleware import get_current_user
from app.models.schemas import (
    ChangePasswordRequest,
    LoginRequest,
    RegisterRequest,
    TokenResponse,
    UpdateProfileRequest,
    OkResponse,
)
from app.utils.auth import create_access_token, hash_password, verify_password
from app.supabase import supabase

router = APIRouter(prefix="/api/auth", tags=["Auth"])


@router.post(
    "/register",
    response_model=TokenResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create a new user account",
)
async def register(payload: RegisterRequest):
    existing = (
        supabase.table("users")
        .select("id")
        .eq("email", payload.email)
        .limit(1)
        .execute()
    )

    if existing.data:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists.",
        )

    user_id = str(uuid4())

    try:
        supabase.table("users").insert(
            {
                "id": user_id,
                "full_name": payload.full_name,
                "email": payload.email,
                "password": hash_password(payload.password),
                "phone": payload.phone,
                "preferred_country": payload.preferred_country,
                "is_admin": False,
                "recently_viewed": [],
                "created_at": datetime.now(timezone.utc).isoformat(),
            }
        ).execute()

    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Unable to create account.",
        )

    token = create_access_token(user_id)

    return TokenResponse(access_token=token)


@router.post(
    "/login",
    response_model=TokenResponse,
    summary="Obtain a JWT for an existing account",
)
async def login(payload: LoginRequest):
    response = (
        supabase.table("users")
        .select("*")
        .eq("email", payload.email)
        .limit(1)
        .execute()
    )

    if not response.data:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    user = response.data[0]

    if not verify_password(payload.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    token = create_access_token(user["id"])

    return TokenResponse(access_token=token)


# ── Me (read) ─────────────────────────────────────────────────
@router.get("/me", summary="Return the current user's profile")
async def get_me(current_user: dict = Depends(get_current_user)):
    current_user.pop("password", None)
    return current_user


@router.put("/me", summary="Update profile fields")
async def update_me(
    payload: UpdateProfileRequest,
    current_user: dict = Depends(get_current_user),
):
    updates = payload.model_dump(exclude_none=True)

    if updates:
        (
            supabase.table("users")
            .update(updates)
            .eq("id", current_user["id"])
            .execute()
        )

    response = (
        supabase.table("users")
        .select("*")
        .eq("id", current_user["id"])
        .limit(1)
        .execute()
    )

    if not response.data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    user = response.data[0]
    user.pop("password", None)

    return user


@router.put(
    "/change-password",
    response_model=OkResponse,
    summary="Change the current user's password",
)
async def change_password(
    payload: ChangePasswordRequest,
    current_user: dict = Depends(get_current_user),
):
    response = (
        supabase.table("users")
        .select("password")
        .eq("id", current_user["id"])
        .limit(1)
        .execute()
    )

    if not response.data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    user = response.data[0]

    if not verify_password(
        payload.current_password,
        user["password"],
    ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Current password is incorrect.",
        )

    (
        supabase.table("users")
        .update(
            {
                "password": hash_password(
                    payload.new_password
                )
            }
        )
        .eq("id", current_user["id"])
        .execute()
    )

    return OkResponse(
        message="Password updated successfully."
    )
