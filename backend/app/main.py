"""
Wellyura — FastAPI application entry point.

Run with:
    python run.py          (development, auto-reload)
    uvicorn app.main:app   (production)
"""
from contextlib import asynccontextmanager

from fastapi import FastAPI, Response, Depends
from fastapi.middleware.cors import CORSMiddleware
import re

from app.config import get_settings
from app.database import close_db, connect_db, get_db
from app.api import admin, auth, dashboard, favorites, institutions, programs, search, contact, accommodations

settings = get_settings()


# ── Lifespan (startup / shutdown) ─────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_db()
    yield
    await close_db()


# ── Application factory ───────────────────────────────────────
app = FastAPI(
    title="Wellyura API",
    description=(
        "REST API for the Wellyura international university directory.\n\n"
        "All institution data comes from the `canadian_institutions` MongoDB "
        "database seeded with `canadian_universities_seed.js`."
    ),
    version="2.0.0",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

# ── CORS ──────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routers ───────────────────────────────────────────────────
app.include_router(auth.router)
app.include_router(institutions.router)
app.include_router(programs.router)
app.include_router(search.router)
app.include_router(favorites.router)
app.include_router(dashboard.router)
app.include_router(admin.router)
app.include_router(contact.router)
app.include_router(accommodations.router)


# ── Health check ──────────────────────────────────────────────
@app.get("/", tags=["Health"], include_in_schema=False)
async def root():
    return {"service": "Wellyura API", "version": "2.0.0", "docs": "/docs"}


@app.get("/api/health", tags=["Health"], summary="Liveness probe")
async def health():
    return {"status": "ok"}


# ── Sitemap ───────────────────────────────────────────────────
@app.get("/sitemap.xml", response_class=Response, tags=["SEO"], summary="Dynamic XML sitemap")
async def get_sitemap(db=Depends(get_db)):
    base_url = "https://wellyura.com"
    
    # 1. Static pages
    static_paths = [
        "",
        "/search",
        "/faq",
        "/contact",
        "/privacy",
        "/terms"
    ]
    
    urls = []
    for path in static_paths:
        urls.append(
            f"  <url>\n"
            f"    <loc>{base_url}{path}</loc>\n"
            f"    <changefreq>daily</changefreq>\n"
            f"    <priority>1.0</priority>\n"
            f"  </url>"
        )
        
    # 2. Dynamic Country Pages
    countries = await db.institutions.distinct("country")
    for country in countries:
        if country:
            country_slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', country.lower().replace(" ", "-")))
            urls.append(
                f"  <url>\n"
                f"    <loc>{base_url}/country/{country_slug}</loc>\n"
                f"    <changefreq>weekly</changefreq>\n"
                f"    <priority>0.8</priority>\n"
                f"  </url>"
            )
            
    # 3. Dynamic Institution Detail Pages
    cursor = db.institutions.find({}, {"slug": 1, "country": 1})
    async for inst in cursor:
        slug = inst.get("slug")
        country = inst.get("country")
        if slug and country:
            country_slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', country.lower().replace(" ", "-")))
            urls.append(
                f"  <url>\n"
                f"    <loc>{base_url}/country/{country_slug}/university/{slug}</loc>\n"
                f"    <changefreq>weekly</changefreq>\n"
                f"    <priority>0.9</priority>\n"
                f"  </url>"
            )
            
    xml_content = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(urls) +
        "\n</urlset>"
    )
    
    return Response(content=xml_content, media_type="application/xml")

