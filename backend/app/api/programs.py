"""
Program routes:
  GET /api/programs                    – all programs, filterable
  GET /api/programs/{institution_ref}  – programs for one institution
"""
import math
import re

from bson import ObjectId
from fastapi import APIRouter, Depends, Query

from app.database import get_db
from app.utils.helpers import serialize_list

router = APIRouter(prefix="/api/programs", tags=["Programs"])


def _programs_filter(
    institution_id: str | None,
    institution_name: str | None,
    level: str | None,
    q: str | None,
) -> dict:
    f: dict = {}

    if institution_id and ObjectId.is_valid(institution_id):
        f["institution_id"] = ObjectId(institution_id)
    elif institution_name:
        f["institution_name"] = {
            "$regex": re.escape(institution_name), "$options": "i"
        }

    if level:
        f["level"] = level.upper()  # "UG" or "PG"

    if q and q.strip():
        escaped = re.escape(q.strip())
        f["$or"] = [
            {"name": {"$regex": escaped, "$options": "i"}},
            {"faculty": {"$regex": escaped, "$options": "i"}},
        ]

    return f


# ── GET /api/programs ─────────────────────────────────────────
@router.get("", summary="List all programs with optional filters")
async def list_programs(
    institution_id: str | None = Query(None),
    institution_name: str | None = Query(None),
    level: str | None = Query(None, pattern="^(UG|PG)$"),
    q: str | None = Query(None),
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    db=Depends(get_db),
):
    f = _programs_filter(institution_id, institution_name, level, q)
    total = await db.programs.count_documents(f)
    skip = (page - 1) * limit

    cursor = db.programs.find(f).sort("name", 1).skip(skip).limit(limit)
    docs = await cursor.to_list(length=limit)

    return {
        "data": serialize_list(docs),
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": math.ceil(total / limit) if total else 0,
    }


# ── GET /api/programs/{institution_ref} ───────────────────────
@router.get(
    "/{institution_ref}",
    summary="All programs for one institution (ObjectId or name slug)",
)
async def programs_for_institution(
    institution_ref: str,
    level: str | None = Query(None, pattern="^(UG|PG)$"),
    db=Depends(get_db),
):
    # 1) If it is a valid ObjectId, search by institution_id
    if ObjectId.is_valid(institution_ref):
        f = _programs_filter(institution_ref, None, level, None)
    else:
        # 2) If it is a slug, try to resolve the institution by normalized slug first
        target_slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', institution_ref.lower().replace(" ", "-")))
        inst_doc = await db.institutions.find_one({"slug": target_slug})
        
        if inst_doc:
            # Query programs by the exact resolved institution_id (preferred)
            f = _programs_filter(str(inst_doc["_id"]), None, level, None)
        else:
            # Fallback: treat institution_ref as regex guess
            name_guess = institution_ref.replace("-", " ")
            f = _programs_filter(None, name_guess, level, None)

    docs = await db.programs.find(f).sort("name", 1).to_list(200)
    return serialize_list(docs)
