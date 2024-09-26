import stripe
from fastapi import APIRouter
from fastapi.exceptions import HTTPException
from starlette.responses import JSONResponse

from core.config import get_settings
from schemas.payment import SubscriptionRequest

router = APIRouter()

settings = get_settings()

@router.post('/subscribe')
async def subscribe(subscription: SubscriptionRequest):
    try:
        checkout_session = stripe.checkout.Session.create(
            success_url=settings.domain_name + '/static/success.html',
            cancel_url=settings.domain_name + '/static/cancel.html',
            mode = 'subscription',
            line_items=[{
                'price': subscription.price_id,
                'quantity': 1,
            }]
        )

        return JSONResponse(content={"session_id": checkout_session.id})
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))