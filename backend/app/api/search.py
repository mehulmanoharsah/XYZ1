"""
Search routes:
  GET /api/search          – global full-text search
  GET /api/search/countries – aggregated country stats
"""
import math
import re
from datetime import datetime

from fastapi import APIRouter, Depends, Query

from app.database import get_db
from app.middleware.auth_middleware import get_optional_user
from app.utils.helpers import serialize_list

router = APIRouter(prefix="/api/search", tags=["Search"])


# ── GET /api/search ───────────────────────────────────────────
@router.get("", summary="Search institutions and programs globally")
async def global_search(
    q: str = Query("", description="Search query"),
    country: str | None = Query(None),
    province: str | None = Query(None),
    city: str | None = Query(None),
    type: str | None = Query(None, alias="type"),
    level: str | None = Query(None, pattern="^(UG|PG)$"),
    scholarship: bool | None = Query(None),
    page: int = Query(1, ge=1),
    limit: int = Query(12, ge=1, le=50),
    db=Depends(get_db),
    current_user: dict | None = Depends(get_optional_user),
):
    # ── Build institution filter ──────────────────────────────
    inst_filter: dict = {}

    if country:
        inst_filter["country"] = {"$regex": re.escape(country), "$options": "i"}
    if province:
        inst_filter["province"] = {"$regex": re.escape(province), "$options": "i"}
    if city:
        inst_filter["city"] = {"$regex": re.escape(city), "$options": "i"}
    if type:
        inst_filter["type"] = {"$regex": re.escape(type), "$options": "i"}
    if scholarship is True:
        inst_filter["scholarships.0"] = {"$exists": True}

    if q.strip():
        escaped = re.escape(q.strip())
        inst_filter["$or"] = [
            {"name": {"$regex": escaped, "$options": "i"}},
            {"city": {"$regex": escaped, "$options": "i"}},
            {"province": {"$regex": escaped, "$options": "i"}},
            {"top_ug_programs": {"$elemMatch": {"$regex": escaped, "$options": "i"}}},
            {"top_pg_programs": {"$elemMatch": {"$regex": escaped, "$options": "i"}}},
        ]

    # ── Build program filter ──────────────────────────────────
    prog_filter: dict = {}
    if level:
        prog_filter["level"] = level.upper()
    if q.strip():
        escaped = re.escape(q.strip())
        prog_filter["$or"] = [
            {"name": {"$regex": escaped, "$options": "i"}},
            {"faculty": {"$regex": escaped, "$options": "i"}},
        ]

    # ── Execute queries ───────────────────────────────────────
    total = await db.institutions.count_documents(inst_filter)
    skip = (page - 1) * limit

    inst_cursor = (
        db.institutions.find(inst_filter, {"contacts": 0})
        .sort("name", 1)
        .skip(skip)
        .limit(limit)
    )
    institutions = await inst_cursor.to_list(length=limit)

    programs: list = []
    if prog_filter:
        prog_cursor = db.programs.find(prog_filter).sort("name", 1).limit(20)
        programs = await prog_cursor.to_list(20)

    # ── Log search history ────────────────────────────────────
    if current_user and q.strip():
        await db.search_history.insert_one(
            {
                "user_id": current_user["id"],
                "query": q.strip(),
                "filters": {
                    "country": country,
                    "province": province,
                    "city": city,
                    "level": level,
                    "type": type,
                },
                "created_at": datetime.utcnow(),
            }
        )

    # ── Aggregate filters dynamically if country is selected ──
    provinces = []
    cities = []
    if country:
        country_filter = {"country": {"$regex": re.escape(country), "$options": "i"}}
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
        "institutions": serialize_list(institutions),
        "programs": serialize_list(programs),
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": math.ceil(total / limit) if total else 0,
        "filters": {"provinces": provinces, "cities": cities},
    }


# ── GET /api/search/countries ─────────────────────────────────
@router.get("/countries", summary="Country list with institution counts")
async def get_countries(db=Depends(get_db)):
    pipeline = [
        {"$group": {"_id": "$country", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$project": {"_id": 0, "country": "$_id", "count": 1}},
    ]
    result = await db.institutions.aggregate(pipeline).to_list(100)
    return [r for r in result if r.get("country")]
