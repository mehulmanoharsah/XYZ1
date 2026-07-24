"""
Authentication routes:
  POST /api/auth/register
  POST /api/auth/login
  GET  /api/auth/me
  PUT  /api/auth/me
  PUT  /api/auth/change-password
"""
from datetime import datetime

from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException, status

from app.database import get_db
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
from app.utils.helpers import serialize_doc

router = APIRouter(prefix="/api/auth", tags=["Auth"])


# ── Register ──────────────────────────────────────────────────
@router.post(
    "/register",
    response_model=TokenResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create a new user account",
)
async def register(payload: RegisterRequest, db=Depends(get_db)):
    if await db.users.find_one({"email": payload.email}):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists.",
        )

    doc = {
        "full_name": payload.full_name,
        "email": payload.email,
        "password": hash_password(payload.password),
        "phone": payload.phone,
        "preferred_country": payload.preferred_country,
        "is_admin": False,
        "recently_viewed": [],
        "created_at": datetime.utcnow(),
    }
    result = await db.users.insert_one(doc)
    token = create_access_token(str(result.inserted_id))
    return TokenResponse(access_token=token)


# ── Login ─────────────────────────────────────────────────────
@router.post(
    "/login",
    response_model=TokenResponse,
    summary="Obtain a JWT for an existing account",
)
async def login(payload: LoginRequest, db=Depends(get_db)):
    user = await db.users.find_one({"email": payload.email})
    if not user or not verify_password(payload.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )
    token = create_access_token(str(user["_id"]))
    return TokenResponse(access_token=token)


# ── Me (read) ─────────────────────────────────────────────────
@router.get("/me", summary="Return the current user's profile")
async def get_me(current_user: dict = Depends(get_current_user)):
    current_user.pop("password", None)
    return current_user


# ── Me (update) ───────────────────────────────────────────────
@router.put("/me", summary="Update profile fields")
async def update_me(
    payload: UpdateProfileRequest,
    current_user: dict = Depends(get_current_user),
    db=Depends(get_db),
):
    updates = payload.model_dump(exclude_none=True)
    if updates:
        await db.users.update_one(
            {"_id": ObjectId(current_user["id"])},
            {"$set": updates},
        )

    updated = await db.users.find_one({"_id": ObjectId(current_user["id"])})
    result = serialize_doc(updated)
    result.pop("password", None)
    return result


# ── Change password ───────────────────────────────────────────
@router.put(
    "/change-password",
    response_model=OkResponse,
    summary="Change the current user's password",
)
async def change_password(
    payload: ChangePasswordRequest,
    current_user: dict = Depends(get_current_user),
    db=Depends(get_db),
):
    user = await db.users.find_one({"_id": ObjectId(current_user["id"])})
    if not verify_password(payload.current_password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Current password is incorrect.",
        )
    await db.users.update_one(
        {"_id": ObjectId(current_user["id"])},
        {"$set": {"password": hash_password(payload.new_password)}},
    )
    return OkResponse(message="Password updated successfully.")
