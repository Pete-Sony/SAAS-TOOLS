import stripe
from database import client

from fastapi import APIRouter, Depends
from fastapi.exceptions import HTTPException
from fastapi.security import OAuth2PasswordBearer
from starlette.responses import JSONResponse

from core.config import get_settings
from schemas.payment import SubscriptionRequest

router = APIRouter()

settings = get_settings()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@router.post('/subscribe')
async def subscribe(subscription: SubscriptionRequest, token: str = Depends(oauth2_scheme)):
    try:
        user = client.auth.get_user(token)
        print(user)
        checkout_session = stripe.checkout.Session.create(
            success_url=settings.domain_name +  '?success=true',
            cancel_url=settings.domain_name + '?success=false',
            mode = 'subscription',
            line_items=[{
                'price': subscription.price_id,
                'quantity': 1,
            }]
            # metadata={"user_id": user['id']}
        )

        return JSONResponse(content={"url": checkout_session.url})
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))