"""
Wellyura — FastAPI application entry point.

Run with:
    python run.py          (development, auto-reload)
    uvicorn app.main:app   (production)
"""
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.database import close_db, connect_db
from app.api import admin, auth, dashboard, favorites, institutions, programs, search, contact

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


# ── Health check ──────────────────────────────────────────────
@app.get("/", tags=["Health"], include_in_schema=False)
async def root():
    return {"service": "Wellyura API", "version": "2.0.0", "docs": "/docs"}


@app.get("/api/health", tags=["Health"], summary="Liveness probe")
async def health():
    return {"status": "ok"}
