"""
Institution routes:
  GET /api/institutions                        – paginated list with filters
  GET /api/institutions/country/{country_name} – scoped to one country
  GET /api/institutions/{slug_or_id}           – single institution detail
"""
import re

from fastapi import APIRouter, HTTPException, Query

from app.supabase import supabase

router = APIRouter(prefix="/api/institutions", tags=["Institutions"])

def normalize_country(country: str | None):
    if not country:
        return None
    return re.sub(r"[\s-]+", " ", country.strip()).lower()

def build_filters(query, country, province, city, inst_type):
    if country:
        query = query.ilike("country", f"%{normalize_country(country)}%")

    if province:
        query = query.ilike("province", f"%{province}%")

    if city:
        query = query.ilike("city", f"%{city}%")

    if inst_type:
        query = query.ilike("type", f"%{inst_type}%")

    return query

# ── GET /api/institutions ─────────────────────────────────────
@router.get("", summary="List all institutions with optional filters")
async def list_institutions(
    q: str | None = Query(None),
    country: str | None = Query(None),
    province: str | None = Query(None),
    city: str | None = Query(None),
    type: str | None = Query(None, alias="type"),
    scholarship: bool | None = Query(None),
    page: int = Query(1, ge=1),
    limit: int = Query(12, ge=1, le=50),
):
    start = (page - 1) * limit
    end = start + limit - 1

    query = (
        supabase.table("universities")
        .select("*", count="exact")
        .order("name")
    )

    query = build_filters(query, country, province, city, type)

    if q:
        query = query.or_(
            f"name.ilike.%{q}%,abbreviation.ilike.%{q}%,city.ilike.%{q}%,province.ilike.%{q}%"
        )

    if scholarship:
        query = query.not_.is_("scholarships", "null")

    response = query.range(start, end).execute()

    data = response.data or []
    total = response.count or 0

    return {
        "data": data,
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": (total + limit - 1) // limit,
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
):
    start = (page - 1) * limit
    end = start + limit - 1

    query = (
        supabase.table("universities")
        .select("*", count="exact")
        .ilike("country", f"%{normalize_country(country_name)}%")
        .order("name")
    )

    query = build_filters(query, None, province, city, type)

    if q:
        query = query.or_(
            f"name.ilike.%{q}%,abbreviation.ilike.%{q}%,city.ilike.%{q}%,province.ilike.%{q}%"
        )

    if scholarship:
        query = query.not_.is_("scholarships", "null")

    response = query.range(start, end).execute()

    data = response.data or []
    total = response.count or 0

    # Fetch all universities in this country for sidebar filters
    sidebar = (
        supabase.table("universities")
        .select("province,city")
        .ilike("country", f"%{normalize_country(country_name)}%")
        .execute()
    )

    provinces = sorted(
        {
            row["province"]
            for row in sidebar.data
            if row.get("province")
        }
    )

    cities = sorted(
        {
            row["city"]
            for row in sidebar.data
            if row.get("city")
        }
    )

    return {
        "data": data,
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": (total + limit - 1) // limit,
        "filters": {
            "provinces": provinces,
            "cities": cities,
        },
        "filter_options": {
            "provinces": provinces,
            "cities": cities,
        },
    }


# ── GET /api/institutions/{slug_or_id} ────────────────────────
@router.get(
    "/{slug_or_id}",
    summary="Get a single institution by slug",
)
async def get_institution(slug_or_id: str):
    target_slug = re.sub(
        r"-+",
        "-",
        re.sub(r"[^a-z0-9-]", "", slug_or_id.lower().replace(" ", "-")),
    )

    # 1. Exact slug lookup
    response = (
        supabase.table("universities")
        .select("*")
        .eq("slug", target_slug)
        .limit(1)
        .execute()
    )

    if response.data:
        return response.data[0]

    # 2. Fallback: search by name
    response = (
        supabase.table("universities")
        .select("*")
        .ilike("name", f"%{slug_or_id.replace('-', ' ').strip()}%")
        .limit(1)
        .execute()
    )

    if response.data:
        return response.data[0]

    raise HTTPException(
        status_code=404,
        detail="Institution not found."
    )