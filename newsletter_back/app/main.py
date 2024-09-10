import asyncio
from fastapi import FastAPI
from app.database import create_db_and_tables
from contextlib import asynccontextmanager
from app.routes import router
from app.email_utils import send_newsletter

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    newsletter_task = asyncio.create_task(send_newsletter())
    yield

    newsletter_task.cancel()
    try:
        await newsletter_task
    except asyncio.CancelledError:
        pass

app = FastAPI(lifespan=lifespan)

app.include_router(router)

