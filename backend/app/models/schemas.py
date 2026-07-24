"""
Pydantic schemas for request validation and response shaping.
"""
from __future__ import annotations

from datetime import datetime
from typing import Any, Optional

from pydantic import BaseModel, EmailStr, Field


# ── Shared ────────────────────────────────────────────────────
class OkResponse(BaseModel):
    message: str


# ── Auth ──────────────────────────────────────────────────────
class RegisterRequest(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    password: str = Field(..., min_length=6, max_length=128)
    phone: Optional[str] = Field(None, max_length=30)
    preferred_country: str = Field("Canada", max_length=60)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class UpdateProfileRequest(BaseModel):
    full_name: Optional[str] = Field(None, min_length=2, max_length=120)
    phone: Optional[str] = Field(None, max_length=30)
    preferred_country: Optional[str] = Field(None, max_length=60)


class ChangePasswordRequest(BaseModel):
    current_password: str
    new_password: str = Field(..., min_length=6, max_length=128)


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


# ── Favorites ─────────────────────────────────────────────────
class FavoriteCreateRequest(BaseModel):
    institution_id: str
    institution_name: str
    city: Optional[str] = None
    province: Optional[str] = None
    country: Optional[str] = None


# ── Pagination wrapper ────────────────────────────────────────
class PaginatedResponse(BaseModel):
    data: list[Any]
    total: int
    page: int
    limit: int
    total_pages: int


# ── Contact Submission ────────────────────────────────────────
class ContactSubmissionRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)


# ── Accommodation Inquiries ─────────────────────────────────
class AccommodationInquiryRequest(BaseModel):
    accommodation_id: str
    room_type: str
    check_in_date: str
    check_out_date: str
    message: Optional[str] = Field(None, max_length=1000)


# ── Accommodation Reviews ──────────────────────────────────
class AccommodationReviewRequest(BaseModel):
    rating: int = Field(..., ge=1, le=5)
    comment: str = Field(..., min_length=5, max_length=1000)


