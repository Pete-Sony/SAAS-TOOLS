from dotenv import find_dotenv
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request

import stripe

from core.config import get_settings
from router import donations, webhooks, subscriptions

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="static")
settings = get_settings()

stripe.api_key = settings.stripe_secret_key
app.include_router(donations.router)
app.include_router(webhooks.router)
app.include_router(subscriptions.router)

@app.get('/', response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse("donation.html", {"request": request})