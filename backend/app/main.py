"""
Wellyura — FastAPI application entry point.

Run with:
    python run.py          (development, auto-reload)
    uvicorn app.main:app   (production)
"""

import os
import re
import sys

from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware

# Ensure the backend folder is in the Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.api import (
    accommodations,
    admin,
    auth,
    contact,
    dashboard,
    favorites,
    institutions,
    programs,
    search,
)
from app.config import get_settings
from app.supabase import supabase

settings = get_settings()


def slugify(text: str) -> str:
    """Convert a string into a URL-friendly slug."""
    return re.sub(
        r"-+",
        "-",
        re.sub(r"[^a-z0-9-]", "", text.lower().replace(" ", "-")),
    )


app = FastAPI(
    title="Wellyura API",
    description=(
        "REST API for the Wellyura international university directory.\n\n"
        "All institution data is stored in Supabase PostgreSQL."
    ),
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# ──────────────────────────────────────────────────────────────
# CORS
# ──────────────────────────────────────────────────────────────

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ──────────────────────────────────────────────────────────────
# Routers
# ──────────────────────────────────────────────────────────────

app.include_router(auth.router)
app.include_router(institutions.router)
app.include_router(programs.router)
app.include_router(search.router)
app.include_router(favorites.router)
app.include_router(dashboard.router)
app.include_router(admin.router)
app.include_router(contact.router)
app.include_router(accommodations.router)

# ──────────────────────────────────────────────────────────────
# Health
# ──────────────────────────────────────────────────────────────


@app.get("/", tags=["Health"], include_in_schema=False)
async def root():
    return {
        "service": "Wellyura API",
        "version": "2.0.0",
        "docs": "/docs",
    }


@app.get("/api/health", tags=["Health"], summary="Liveness probe")
async def health():
    return {"status": "ok"}


# ──────────────────────────────────────────────────────────────
# Sitemap
# ──────────────────────────────────────────────────────────────


@app.get(
    "/sitemap.xml",
    response_class=Response,
    tags=["SEO"],
    summary="Dynamic XML sitemap",
)
async def get_sitemap():
    base_url = "https://wellyura.com"

    static_paths = [
        "",
        "/search",
        "/faq",
        "/contact",
        "/privacy",
        "/terms",
    ]

    urls = []

    for path in static_paths:
        urls.append(
            f"""  <url>
    <loc>{base_url}{path}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>"""
        )

    try:
        countries_response = (
            supabase.table("universities")
            .select("country")
            .execute()
        )

        institutions_response = (
            supabase.table("universities")
            .select("slug,country")
            .execute()
        )

        unique_countries = sorted(
            {
                row["country"]
                for row in (countries_response.data or [])
                if row.get("country")
            }
        )

        for country in unique_countries:
            urls.append(
                f"""  <url>
    <loc>{base_url}/country/{slugify(country)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>"""
            )

        for inst in (institutions_response.data or []):
            slug = inst.get("slug")
            country = inst.get("country")

            if slug and country:
                urls.append(
                    f"""  <url>
    <loc>{base_url}/country/{slugify(country)}/university/{slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>"""
                )

    except Exception:
        # If Supabase is unavailable, still return the static sitemap.
        pass

    xml_content = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(urls)
        + "\n</urlset>"
    )

    return Response(
        content=xml_content,
        media_type="application/xml",
    )