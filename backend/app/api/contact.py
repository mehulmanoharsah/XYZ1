"""
Contact submission route:
  POST /api/contact
"""

from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException, status

from app.models.schemas import ContactSubmissionRequest, OkResponse
from app.supabase import supabase

router = APIRouter(prefix="/api/contact", tags=["Contact"])


@router.post(
    "",
    response_model=OkResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit a contact form query",
)
async def submit_contact(payload: ContactSubmissionRequest):
    try:
        (
            supabase.table("contact_messages")
            .insert(
                {
                    "name": payload.name,
                    "email": payload.email,
                    "subject": payload.subject,
                    "message": payload.message,
                    "created_at": datetime.now(timezone.utc).isoformat(),
                }
            )
            .execute()
        )

        return OkResponse(
            message="Thank you! Your message has been successfully sent. We will get back to you shortly."
        )

    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Unable to submit your message.",
        )