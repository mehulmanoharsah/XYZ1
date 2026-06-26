from bson import ObjectId
from typing import Any


def _convert(value: Any) -> Any:
    """Recursively convert BSON types to JSON-safe types."""
    if isinstance(value, ObjectId):
        return str(value)
    if isinstance(value, dict):
        return serialize_doc(value)
    if isinstance(value, list):
        return [_convert(item) for item in value]
    return value


def serialize_doc(doc: dict | None) -> dict | None:
    """Convert a MongoDB document to a JSON-serialisable dict.

    The ``_id`` field is renamed to ``id`` and all ObjectId instances are
    stringified throughout the document tree.
    """
    if doc is None:
        return None
    result: dict = {}
    for key, value in doc.items():
        if key == "_id":
            result["id"] = str(value)
        else:
            result[key] = _convert(value)
    return result


def serialize_list(docs: list) -> list:
    return [serialize_doc(d) for d in docs]


def paginate(total: int, page: int, limit: int) -> dict:
    import math
    return {
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": math.ceil(total / limit) if total else 0,
    }
