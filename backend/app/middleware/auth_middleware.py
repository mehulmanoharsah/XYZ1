"""
FastAPI dependency functions for JWT authentication.
"""

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.supabase import supabase
from app.utils.auth import decode_access_token

_bearer = HTTPBearer(auto_error=False)


async def _get_user_from_token(
    credentials: HTTPAuthorizationCredentials | None,
) -> dict | None:
    if not credentials:
        return None

    user_id = decode_access_token(credentials.credentials)
    if not user_id:
        return None

    response = (
        supabase.table("users")
        .select("*")
        .eq("id", user_id)
        .limit(1)
        .execute()
    )

    if not response.data:
        return None

    return response.data[0]


async def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(_bearer),
) -> dict:
    """Require a valid JWT. Raises 401 if missing or invalid."""
    user = await _get_user_from_token(credentials)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated or token expired.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return user


async def get_optional_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(_bearer),
) -> dict | None:
    """Return the user if authenticated, otherwise None."""
    return await _get_user_from_token(credentials)


async def get_admin_user(
    current_user: dict = Depends(get_current_user),
) -> dict:
    """Require the current user to have is_admin == True."""
    if not current_user.get("is_admin", False):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Administrator access required.",
        )

    return current_user