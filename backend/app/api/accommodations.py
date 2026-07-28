import math
import re
from datetime import datetime, timezone
from fastapi import status

from fastapi import APIRouter, Depends, HTTPException, Query

from app.middleware.auth_middleware import (
    get_admin_user,
    get_current_user,
)
from app.models.schemas import (
    AccommodationInquiryRequest,
    AccommodationReviewRequest,
    
)
from app.supabase import supabase

router = APIRouter(
    prefix="/api/accommodations",
    tags=["Accommodations"],
)


# ---------------------------------------------------------
# Helpers
# ---------------------------------------------------------

def slugify(text: str) -> str:
    return re.sub(
        r"-+",
        "-",
        re.sub(
            r"[^a-z0-9-]",
            "",
            text.lower().replace(" ", "-"),
        ),
    )


# ---------------------------------------------------------
# GET /api/accommodations
# ---------------------------------------------------------

@router.get("", summary="List accommodations")
async def list_accommodations(
    q: str | None = Query(
        None,
        description="Search name, city, province or description",
    ),
    country: str | None = Query(None),
    city: str | None = Query(None),
    type: str | None = Query(None),
    price_max: int | None = Query(None),
    university_id: str | None = Query(None),
    gender_policy: str | None = Query(None),
    page: int = Query(1, ge=1),
    limit: int = Query(12, ge=1, le=50),
):
    response = (
        supabase.table("accommodations")
        .select("*")
        .execute()
    )

    accommodations = response.data or []

    filtered = []

    for acc in accommodations:

        if country and (
            acc.get("country", "").lower()
            != country.lower()
        ):
            continue

        if city and (
            acc.get("city", "").lower()
            != city.lower()
        ):
            continue

        if type and (
            acc.get("type", "").lower()
            != type.lower()
        ):
            continue

        if gender_policy and (
            acc.get("gender_policy", "").lower()
            != gender_policy.lower()
        ):
            continue

        if (
            price_max is not None
            and acc.get("price_per_month") is not None
            and acc["price_per_month"] > price_max
        ):
            continue

        if university_id:
            nearby = acc.get("nearby_universities") or []

            found = any(
                u.get("institution_id") == university_id
                for u in nearby
            )

            if not found:
                continue

        if q:
            keyword = q.lower()

            searchable = " ".join(
                [
                    str(acc.get("name", "")),
                    str(acc.get("city", "")),
                    str(acc.get("province", "")),
                    str(acc.get("description", "")),
                    " ".join(acc.get("amenities") or []),
                ]
            ).lower()

            if keyword not in searchable:
                continue

        filtered.append(acc)

    filtered.sort(key=lambda x: x.get("name", ""))

    total = len(filtered)

    start = (page - 1) * limit
    end = start + limit

    return {
        "data": filtered[start:end],
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": math.ceil(total / limit)
        if total
        else 0,
    }


# ---------------------------------------------------------
# GET /api/accommodations/{slug_or_id}
# ---------------------------------------------------------

@router.get(
    "/{slug_or_id}",
    summary="Get accommodation details",
)
async def get_accommodation(slug_or_id: str):

    response = (
        supabase.table("accommodations")
        .select("*")
        .or_(
            f"id.eq.{slug_or_id},slug.eq.{slug_or_id.lower().strip()}"
        )
        .limit(1)
        .execute()
    )

    if response.data:
        return response.data[0]

    target_slug = slugify(slug_or_id)

    response = (
        supabase.table("accommodations")
        .select("*")
        .eq("slug", target_slug)
        .limit(1)
        .execute()
    )

    if not response.data:
        raise HTTPException(
            status_code=404,
            detail="Accommodation not found.",
        )

    return response.data[0]

# ---------------------------------------------------------
# POST /api/accommodations/inquire
# ---------------------------------------------------------

@router.post(
    "/inquire",
    status_code=status.HTTP_201_CREATED,
    summary="Submit housing booking inquiry",
)
async def create_inquiry(
    payload: AccommodationInquiryRequest,
    current_user: dict = Depends(get_current_user),
):
    accommodation = (
        supabase.table("accommodations")
        .select("id,name")
        .eq("id", payload.accommodation_id)
        .limit(1)
        .execute()
    )

    if not accommodation.data:
        raise HTTPException(
            status_code=404,
            detail="Accommodation not found.",
        )

    acc = accommodation.data[0]

    inquiry = {
        "user_id": current_user["id"],
        "user_name": current_user.get("full_name", "Student"),
        "user_email": current_user.get("email"),
        "accommodation_id": acc["id"],
        "accommodation_name": acc["name"],
        "room_type": payload.room_type,
        "check_in_date": payload.check_in_date,
        "check_out_date": payload.check_out_date,
        "message": payload.message,
        "status": "pending",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }

    result = (
        supabase.table("housing_inquiries")
        .insert(inquiry)
        .execute()
    )

    return result.data[0]


# ---------------------------------------------------------
# GET /api/accommodations/my-inquiries
# ---------------------------------------------------------

@router.get(
    "/my-inquiries",
    summary="List user's housing inquiries",
)
async def my_inquiries(
    current_user: dict = Depends(get_current_user),
):
    response = (
        supabase.table("housing_inquiries")
        .select("*")
        .eq("user_id", current_user["id"])
        .order("created_at", desc=True)
        .execute()
    )

    return response.data or []


# ---------------------------------------------------------
# GET /api/accommodations/admin/inquiries
# ---------------------------------------------------------

@router.get(
    "/admin/inquiries",
    summary="List all inquiries",
)
async def admin_inquiries(
    admin_user: dict = Depends(get_admin_user),
):
    response = (
        supabase.table("housing_inquiries")
        .select("*")
        .order("created_at", desc=True)
        .execute()
    )

    return response.data or []

# ---------------------------------------------------------
# GET /api/accommodations/{id}/reviews
# ---------------------------------------------------------

@router.get(
    "/{id}/reviews",
    summary="Get all reviews for an accommodation",
)
async def get_reviews(id: str):

    response = (
        supabase.table("accommodation_reviews")
        .select("*")
        .eq("accommodation_id", id)
        .order("created_at", desc=True)
        .execute()
    )

    return response.data or []


# ---------------------------------------------------------
# GET /api/accommodations/{id}/review-eligibility
# ---------------------------------------------------------

@router.get(
    "/{id}/review-eligibility",
    summary="Check if user can review this accommodation",
)
async def check_review_eligibility(
    id: str,
    current_user: dict = Depends(get_current_user),
):

    inquiry = (
        supabase.table("housing_inquiries")
        .select("id")
        .eq("user_id", current_user["id"])
        .eq("accommodation_id", id)
        .in_(
            "status",
            ["approved", "confirmed", "completed", "pending"],
        )
        .limit(1)
        .execute()
    )

    review = (
        supabase.table("accommodation_reviews")
        .select("id")
        .eq("user_id", current_user["id"])
        .eq("accommodation_id", id)
        .limit(1)
        .execute()
    )

    return {
        "eligible": bool(inquiry.data) and not bool(review.data),
        "has_inquiry": bool(inquiry.data),
        "already_reviewed": bool(review.data),
    }


# ---------------------------------------------------------
# POST /api/accommodations/{id}/reviews
# ---------------------------------------------------------

@router.post(
    "/{id}/reviews",
    summary="Submit a review",
)
async def submit_review(
    id: str,
    payload: AccommodationReviewRequest,
    current_user: dict = Depends(get_current_user),
):

    accommodation = (
        supabase.table("accommodations")
        .select("id")
        .eq("id", id)
        .limit(1)
        .execute()
    )

    if not accommodation.data:
        raise HTTPException(
            status_code=404,
            detail="Accommodation not found.",
        )

    inquiry = (
        supabase.table("housing_inquiries")
        .select("id")
        .eq("user_id", current_user["id"])
        .eq("accommodation_id", id)
        .in_(
            "status",
            ["approved", "confirmed", "completed", "pending"],
        )
        .limit(1)
        .execute()
    )

    if not inquiry.data:
        raise HTTPException(
            status_code=403,
            detail="You can only review accommodations where you have a booking inquiry.",
        )

    existing = (
        supabase.table("accommodation_reviews")
        .select("id")
        .eq("user_id", current_user["id"])
        .eq("accommodation_id", id)
        .limit(1)
        .execute()
    )

    if existing.data:
        raise HTTPException(
            status_code=400,
            detail="You have already submitted a review.",
        )

    review = {
        "accommodation_id": id,
        "user_id": current_user["id"],
        "user_name": current_user.get("full_name", "Student"),
        "rating": payload.rating,
        "comment": payload.comment,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }

    (
        supabase.table("accommodation_reviews")
        .insert(review)
        .execute()
    )

    reviews = (
        supabase.table("accommodation_reviews")
        .select("rating")
        .eq("accommodation_id", id)
        .execute()
    )

    ratings = [
        r["rating"]
        for r in (reviews.data or [])
        if r.get("rating") is not None
    ]

    reviews_count = len(ratings)

    average_rating = (
        round(sum(ratings) / reviews_count, 1)
        if reviews_count
        else 5.0
    )

    (
        supabase.table("accommodations")
        .update(
            {
                "rating": average_rating,
                "reviews_count": reviews_count,
            }
        )
        .eq("id", id)
        .execute()
    )

    return {
        "message": "Review submitted successfully!",
        "rating": average_rating,
        "reviews_count": reviews_count,
    }