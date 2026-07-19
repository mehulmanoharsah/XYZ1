"""
Accommodation routes:
  GET /api/accommodations                      – paginated list with filters
  GET /api/accommodations/{slug_or_id}         – single accommodation detail
  POST /api/accommodations/inquire             – submit housing inquiry (authenticated)
  GET /api/accommodations/my-inquiries         – student's submitted inquiries (authenticated)
  GET /api/accommodations/admin/inquiries      – all inquiries for admin review (admin authenticated)
"""
import math
import re
from datetime import datetime
from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException, Query, status

from app.database import get_db
from app.middleware.auth_middleware import get_current_user, get_admin_user
from app.models.schemas import AccommodationInquiryRequest, OkResponse
from app.utils.helpers import serialize_doc, serialize_list

router = APIRouter(prefix="/api/accommodations", tags=["Accommodations"])


# ── GET /api/accommodations ───────────────────────────────────
@router.get("", summary="List all accommodations with filters")
async def list_accommodations(
    q: str | None = Query(None, description="Search name, city, province, or description"),
    country: str | None = Query(None),
    city: str | None = Query(None),
    type: str | None = Query(None, description="hostel, residence_hall, apartment, homestay"),
    price_max: int | None = Query(None, description="Max budget per month"),
    university_id: str | None = Query(None, description="Filter by accommodations near this university ID"),
    gender_policy: str | None = Query(None, description="Filter by gender policy (e.g. female_only)"),
    page: int = Query(1, ge=1),
    limit: int = Query(12, ge=1, le=50),
    db=Depends(get_db),
):
    f: dict = {}

    if country:
        f["country"] = {"$regex": re.escape(country.strip()), "$options": "i"}
    if city:
        f["city"] = {"$regex": re.escape(city.strip()), "$options": "i"}
    if type:
        f["type"] = type.strip()
    if gender_policy:
        f["gender_policy"] = gender_policy.strip()
    if price_max is not None:
        f["price_per_month_cad"] = {"$lte": price_max}
    
    if university_id:
        # Match nearby_universities.institution_id as string or ObjectId
        f["nearby_universities.institution_id"] = {
            "$in": [university_id, ObjectId(university_id) if ObjectId.is_valid(university_id) else None]
        }

    if q and q.strip():
        escaped = re.escape(q.strip())
        f["$or"] = [
            {"name": {"$regex": escaped, "$options": "i"}},
            {"city": {"$regex": escaped, "$options": "i"}},
            {"province": {"$regex": escaped, "$options": "i"}},
            {"description": {"$regex": escaped, "$options": "i"}},
            {"amenities": {"$elemMatch": {"$regex": escaped, "$options": "i"}}}
        ]

    total = await db.accommodations.count_documents(f)
    skip = (page - 1) * limit

    cursor = (
        db.accommodations.find(f)
        .sort("name", 1)
        .skip(skip)
        .limit(limit)
    )
    docs = await cursor.to_list(length=limit)

    return {
        "data": serialize_list(docs),
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": math.ceil(total / limit) if total else 0,
    }


# ── GET /api/accommodations/my-inquiries ─────────────────────
@router.get("/my-inquiries", summary="List user's housing inquiries")
async def my_inquiries(
    current_user: dict = Depends(get_current_user),
    db=Depends(get_db),
):
    docs = (
        await db.housing_inquiries.find({"user_id": current_user["id"]})
        .sort("created_at", -1)
        .to_list(100)
    )
    return serialize_list(docs)


# ── GET /api/accommodations/admin/inquiries ──────────────────
@router.get("/admin/inquiries", summary="List all inquiries for admin review")
async def admin_inquiries(
    db=Depends(get_db),
    admin_user=Depends(get_admin_user),
):
    docs = (
        await db.housing_inquiries.find({})
        .sort("created_at", -1)
        .to_list(500)
    )
    return serialize_list(docs)


# ── GET /api/accommodations/{slug_or_id} ──────────────────────
@router.get("/{slug_or_id}", summary="Get a single accommodation by ID or slug")
async def get_accommodation(slug_or_id: str, db=Depends(get_db)):
    doc = None

    # 1) Try exact ObjectId lookup
    if ObjectId.is_valid(slug_or_id):
        doc = await db.accommodations.find_one({"_id": ObjectId(slug_or_id)})

    # 2) Fallback: match by normalized slug
    if not doc:
        doc = await db.accommodations.find_one({"slug": slug_or_id.lower().strip()})

    # 3) Fallback: clean-slug match
    if not doc:
        target_slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', slug_or_id.lower().replace(" ", "-")))
        doc = await db.accommodations.find_one({"slug": target_slug})

    if not doc:
        raise HTTPException(status_code=404, detail="Accommodation not found.")

    return serialize_doc(doc)


# ── POST /api/accommodations/inquire ──────────────────────────
@router.post("/inquire", status_code=status.HTTP_201_CREATED, summary="Submit housing booking inquiry")
async def create_inquiry(
    payload: AccommodationInquiryRequest,
    current_user: dict = Depends(get_current_user),
    db=Depends(get_db),
):
    # Verify accommodation exists
    acc_id = payload.accommodation_id
    if not ObjectId.is_valid(acc_id):
        raise HTTPException(status_code=400, detail="Invalid accommodation ID format.")
    
    accommodation = await db.accommodations.find_one({"_id": ObjectId(acc_id)})
    if not accommodation:
        raise HTTPException(status_code=404, detail="Accommodation not found.")

    doc = {
        "user_id": current_user["id"],
        "user_name": current_user.get("full_name", "Student"),
        "user_email": current_user.get("email"),
        "accommodation_id": acc_id,
        "accommodation_name": accommodation.get("name"),
        "room_type": payload.room_type,
        "check_in_date": payload.check_in_date,
        "check_out_date": payload.check_out_date,
        "message": payload.message,
        "status": "pending",
        "created_at": datetime.utcnow()
    }

    result = await db.housing_inquiries.insert_one(doc)
    doc["_id"] = result.inserted_id
    return serialize_doc(doc)
