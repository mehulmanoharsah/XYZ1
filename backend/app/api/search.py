"""
Search routes:
  GET /api/search          – global full-text search
  GET /api/search/countries – aggregated country stats
"""
from datetime import datetime, timezone

from fastapi import APIRouter, Depends, Query

from app.middleware.auth_middleware import get_optional_user
from app.supabase import supabase

router = APIRouter(prefix="/api/search", tags=["Search"])


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
    current_user: dict | None = Depends(get_optional_user),
):
    start = (page - 1) * limit
    end = start + limit - 1

    inst_query = (
        supabase.table("universities")
        .select("*", count="exact")
        .order("name")
    )

    if country:
        inst_query = inst_query.ilike("country", f"%{country}%")

    if province:
        inst_query = inst_query.ilike("province", f"%{province}%")

    if city:
        inst_query = inst_query.ilike("city", f"%{city}%")

    if type:
        inst_query = inst_query.ilike("type", f"%{type}%")

    if scholarship:
        inst_query = inst_query.not_.is_("scholarships", "null")

    if q.strip():
        inst_query = inst_query.or_(
            f"name.ilike.%{q}%,"
            f"abbreviation.ilike.%{q}%,"
            f"city.ilike.%{q}%,"
            f"province.ilike.%{q}%"
        )

    inst_response = (
        inst_query
        .range(start, end)
        .execute()
    )

    institutions = inst_response.data or []
    total = inst_response.count or 0

    programs = []

    if q.strip() or level:
        prog_query = (
            supabase.table("programs")
            .select("*")
            .order("name")
        )

        if level:
            prog_query = prog_query.eq("level", level.upper())

        if q.strip():
            prog_query = prog_query.or_(
                f"name.ilike.%{q}%,faculty.ilike.%{q}%"
            )

        prog_response = (
            prog_query
            .limit(20)
            .execute()
        )

        programs = prog_response.data or []

    if current_user and q.strip():
        try:
            supabase.table("search_history").insert(
                {
                    "user_id": current_user["id"],
                    "query": q.strip(),
                    "filters": {
                        "country": country,
                        "province": province,
                        "city": city,
                        "type": type,
                        "level": level,
                    },
                    "created_at": datetime.now(timezone.utc).isoformat(),
                }
            ).execute()
        except Exception:
            # Don't fail the search if history logging fails
            pass

    provinces = []
    cities = []

    if country:
        sidebar = (
            supabase.table("universities")
            .select("province,city")
            .ilike("country", f"%{country}%")
            .execute()
        )

        provinces = sorted({
            r["province"]
            for r in sidebar.data
            if r.get("province")
        })

        cities = sorted({
            r["city"]
            for r in sidebar.data
            if r.get("city")
        })

    return {
        "institutions": institutions,
        "programs": programs,
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": (total + limit - 1) // limit,
        "filters": {
            "provinces": provinces,
            "cities": cities,
        },
    }


@router.get("/countries", summary="Country list with institution counts")
async def get_countries():
    response = (
        supabase.table("universities")
        .select("country")
        .execute()
    )

    counts = {}

    for row in response.data or []:
        country = row.get("country")

        if not country:
            continue

        counts[country] = counts.get(country, 0) + 1

    return [
        {
            "country": country,
            "count": count,
        }
        for country, count in sorted(
            counts.items(),
            key=lambda x: x[1],
            reverse=True,
        )
    ]