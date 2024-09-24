from fastapi import FastAPI, HTTPException, status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from starlette.requests import Request

from pydantic import BaseModel
import stripe

from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory="static")

stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

class DonationRequst(BaseModel):
    amount: int
    currency: str


@app.get('/', response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse("donation.html", {"request": request})

@app.post('/donate')
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
            success_url='http://127.0.0.1:8000/static/success.html',
            cancel_url='http://127.0.0.1:8000/static/cancel.html',
        )
        # json_comp = jsonable_encoder(checkout_session)
        return JSONResponse(content={"url": checkout_session.url})
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
