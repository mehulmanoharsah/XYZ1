"""
Institution routes:
  GET /api/institutions                        – paginated list with filters
  GET /api/institutions/country/{country_name} – scoped to one country
  GET /api/institutions/{slug_or_id}           – single institution detail
"""
import math
import re

from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException, Query

from app.database import get_db
from app.utils.helpers import serialize_doc, serialize_list

router = APIRouter(prefix="/api/institutions", tags=["Institutions"])


# ── Shared filter builder ─────────────────────────────────────
def _build_filter(
    country: str | None,
    province: str | None,
    city: str | None,
    inst_type: str | None,
    scholarship: bool | None,
    q: str | None,
) -> dict:
    f: dict = {}

    if country:
        f["country"] = {"$regex": re.escape(country), "$options": "i"}
    if province:
        f["province"] = {"$regex": re.escape(province), "$options": "i"}
    if city:
        f["city"] = {"$regex": re.escape(city), "$options": "i"}
    if inst_type:
        f["type"] = {"$regex": re.escape(inst_type), "$options": "i"}
    if scholarship is True:
        # Has at least one scholarship entry
        f["scholarships.0"] = {"$exists": True}

    if q and q.strip():
        escaped = re.escape(q.strip())
        f["$or"] = [
            {"name": {"$regex": escaped, "$options": "i"}},
            {"city": {"$regex": escaped, "$options": "i"}},
            {"province": {"$regex": escaped, "$options": "i"}},
            {"top_ug_programs": {"$elemMatch": {"$regex": escaped, "$options": "i"}}},
            {"top_pg_programs": {"$elemMatch": {"$regex": escaped, "$options": "i"}}},
        ]

    return f


# ── GET /api/institutions ─────────────────────────────────────
@router.get("", summary="List all institutions with optional filters")
async def list_institutions(
    q: str | None = Query(None, description="Full-text search"),
    country: str | None = Query(None),
    province: str | None = Query(None),
    city: str | None = Query(None),
    type: str | None = Query(None, alias="type"),
    scholarship: bool | None = Query(None),
    page: int = Query(1, ge=1),
    limit: int = Query(12, ge=1, le=50),
    db=Depends(get_db),
):
    f = _build_filter(country, province, city, type, scholarship, q)
    total = await db.institutions.count_documents(f)
    skip = (page - 1) * limit

    cursor = (
        db.institutions.find(f, {"contacts": 0})
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


# ── GET /api/institutions/country/{country_name} ──────────────
@router.get(
    "/country/{country_name}",
    summary="List institutions for a specific country with filter metadata",
)
async def list_by_country(
    country_name: str,
    q: str | None = Query(None),
    province: str | None = Query(None),
    city: str | None = Query(None),
    type: str | None = Query(None, alias="type"),
    scholarship: bool | None = Query(None),
    page: int = Query(1, ge=1),
    limit: int = Query(12, ge=1, le=50),
    db=Depends(get_db),
):
    f = _build_filter(country_name, province, city, type, scholarship, q)
    total = await db.institutions.count_documents(f)
    skip = (page - 1) * limit

    cursor = (
        db.institutions.find(f)
        .sort("name", 1)
        .skip(skip)
        .limit(limit)
    )
    docs = await cursor.to_list(length=limit)

    # Aggregate province & city lists for the sidebar (unfiltered by current
    # province/city so the dropdowns stay fully populated)
    country_filter = {"country": {"$regex": re.escape(country_name), "$options": "i"}}
    pipeline = [
        {"$match": country_filter},
        {
            "$group": {
                "_id": None,
                "provinces": {"$addToSet": "$province"},
                "cities": {"$addToSet": "$city"},
            }
        },
    ]
    agg = await db.institutions.aggregate(pipeline).to_list(1)
    provinces = sorted(p for p in (agg[0]["provinces"] if agg else []) if p)
    cities = sorted(c for c in (agg[0]["cities"] if agg else []) if c)

    return {
        "data": serialize_list(docs),
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": math.ceil(total / limit) if total else 0,
        "filters": {"provinces": provinces, "cities": cities},
        "filter_options": {"provinces": provinces, "cities": cities},
    }


# ── GET /api/institutions/{slug_or_id} ────────────────────────
@router.get(
    "/{slug_or_id}",
    summary="Get a single institution by MongoDB ObjectId or name slug",
)
async def get_institution(slug_or_id: str, db=Depends(get_db)):
    doc = None

    # 1) Try exact ObjectId lookup
    if ObjectId.is_valid(slug_or_id):
        doc = await db.institutions.find_one({"_id": ObjectId(slug_or_id)})

    # 2) Fallback: match by normalized slug (handles special characters like apostrophes)
    if not doc:
        target_slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', slug_or_id.lower().replace(" ", "-")))
        cursor = db.institutions.find({}, {"name": 1})
        async for inst in cursor:
            inst_slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', inst["name"].lower().replace(" ", "-")))
            if inst_slug == target_slug:
                doc = await db.institutions.find_one({"_id": inst["_id"]})
                break

    # 3) Fallback: treat slug as a URL-encoded name word-by-word
    if not doc:
        name_guess = slug_or_id.replace("-", " ")
        doc = await db.institutions.find_one(
            {"name": {"$regex": re.escape(name_guess), "$options": "i"}}
        )

    if not doc:
        raise HTTPException(status_code=404, detail="Institution not found.")

    return serialize_doc(doc)
