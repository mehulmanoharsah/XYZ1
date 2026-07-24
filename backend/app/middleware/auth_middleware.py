"""
FastAPI dependency functions for JWT authentication.
"""
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from bson import ObjectId

from app.database import get_db
from app.utils.auth import decode_access_token
from app.utils.helpers import serialize_doc

_bearer = HTTPBearer(auto_error=False)


async def _get_user_from_token(
    credentials: HTTPAuthorizationCredentials | None,
    db,
) -> dict | None:
    if not credentials:
        return None
    user_id = decode_access_token(credentials.credentials)
    if not user_id or not ObjectId.is_valid(user_id):
        return None
    doc = await db.users.find_one({"_id": ObjectId(user_id)})
    return serialize_doc(doc) if doc else None


async def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(_bearer),
    db=Depends(get_db),
) -> dict:
    """Require a valid JWT. Raises 401 if missing or invalid."""
    user = await _get_user_from_token(credentials, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated or token expired.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user


async def get_optional_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(_bearer),
    db=Depends(get_db),
) -> dict | None:
    """Return the user if authenticated, otherwise *None* — never raises."""
    return await _get_user_from_token(credentials, db)


async def get_admin_user(
    current_user: dict = Depends(get_current_user),
) -> dict:
    """Require the current user to have is_admin == True."""
    if not current_user.get("is_admin"):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Administrator access required.",
        )
    return current_user
