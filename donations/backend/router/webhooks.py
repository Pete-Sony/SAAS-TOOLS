from fastapi import APIRouter, HTTPException
from starlette.requests import Request

import stripe
from core.config import get_settings

router = APIRouter()

settings = get_settings()

@router.post('/webhook')
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get('stripe-signature')

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, settings.stripe_webhook_secret
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail='Invalid payload')
    except stripe.error.SignatureVerificationError as e:
        raise HTTPException(status_code=400, detail='Invalid signature')

    # Handle the event
    if event["type"] == "customer.subscription.created":
        data = event["data"]["object"]["customer"]  # contains the payment intent data
        print("Subscription was successful!", data)
    return {'status': 'success'}