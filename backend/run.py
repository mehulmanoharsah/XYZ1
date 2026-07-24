#!/usr/bin/env python3
"""
Development and production server launcher.

Usage:
    python run.py

The server reloads automatically when run locally.
API docs are at http://localhost:8000/docs
"""
import os

import uvicorn

if __name__ == "__main__":
    port = int(os.getenv("PORT", "8000"))
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=port,
        reload=not os.getenv("PORT"),
        log_level="info",
    )
