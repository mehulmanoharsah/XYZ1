"""
Contact submission route:
  POST /api/contact
"""
from datetime import datetime
from fastapi import APIRouter, Depends, status
from app.database import get_db
from app.models.schemas import ContactSubmissionRequest, OkResponse

router = APIRouter(prefix="/api/contact", tags=["Contact"])

@router.post(
    "",
    response_model=OkResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit a contact form query",
)
async def submit_contact(payload: ContactSubmissionRequest, db=Depends(get_db)):
    doc = {
        "name": payload.name,
        "email": payload.email,
        "subject": payload.subject,
        "message": payload.message,
        "created_at": datetime.utcnow(),
    }
    await db.contact_messages.insert_one(doc)
    return {"message": "Thank you! Your message has been successfully sent. We will get back to you shortly."}
