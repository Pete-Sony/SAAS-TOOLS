from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse

import stripe

from schemas.payment import DonationRequst
from core.config import get_settings

router = APIRouter()

settings = get_settings()

@router.post('/donate')
async def create_donation(donation: DonationRequst):
    try:
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': donation.currency,
                    'product_data': {
                        'name': 'Donation',
                    },
                    'unit_amount': donation.amount,
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url= settings.domain_name + '/static/success.html',
            cancel_url= settings.domain_name +  '/static/cancel.html',
        )

        return JSONResponse(content={"url": checkout_session.url})
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))