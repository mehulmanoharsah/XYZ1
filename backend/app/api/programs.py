"""
Program routes:
  GET /api/programs                    – all programs, filterable
  GET /api/programs/{institution_ref}  – programs for one institution
"""
import re

from fastapi import APIRouter, Query

from app.supabase import supabase

router = APIRouter(prefix="/api/programs", tags=["Programs"])


def build_program_filters(
    query,
    institution_id: str | None,
    institution_name: str | None,
    level: str | None,
):
    if institution_id:
        query = query.eq("institution_id", institution_id)

    elif institution_name:
        query = query.ilike(
            "institution_name",
            f"%{institution_name}%"
        )

    if level:
        query = query.eq("level", level.upper())

    return query

@router.get("", summary="List all programs with optional filters")
async def list_programs(
    institution_id: str | None = Query(None),
    institution_name: str | None = Query(None),
    level: str | None = Query(None, pattern="^(UG|PG)$"),
    q: str | None = Query(None),
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
):
    start = (page - 1) * limit
    end = start + limit - 1

    query = (
        supabase.table("programs")
        .select("*", count="exact")
        .order("name")
    )

    query = build_program_filters(
        query,
        institution_id,
        institution_name,
        level,
    )

    if q:
        query = query.or_(
            f"name.ilike.%{q}%,faculty.ilike.%{q}%"
        )

    response = query.range(start, end).execute()

    return {
        "data": response.data or [],
        "total": response.count or 0,
        "page": page,
        "limit": limit,
        "total_pages": (
            (response.count or 0) + limit - 1
        ) // limit,
    }


@router.get(
    "/{institution_ref}",
    summary="All programs for one institution",
)
async def programs_for_institution(
    institution_ref: str,
    level: str | None = Query(None, pattern="^(UG|PG)$"),
):
    target_slug = re.sub(
        r"-+",
        "-",
        re.sub(
            r"[^a-z0-9-]",
            "",
            institution_ref.lower().replace(" ", "-"),
        ),
    )

    university = (
        supabase.table("universities")
        .select("id,name")
        .eq("slug", target_slug)
        .limit(1)
        .execute()
    )

    if university.data:
        inst = university.data[0]

        query = (
            supabase.table("programs")
            .select("*")
            .eq("institution_id", inst["id"])
            .order("name")
        )

    else:
        query = (
            supabase.table("programs")
            .select("*")
            .ilike(
                "institution_name",
                f"%{institution_ref.replace('-', ' ').strip()}%"
            )
            .order("name")
        )

    if level:
        query = query.eq("level", level.upper())

    response = query.execute()

    return response.data or []