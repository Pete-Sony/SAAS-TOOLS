from fastapi import APIRouter, BackgroundTasks
from sqlmodel import Session, select
from app.models import Subscriber, SubscriberCreate
from app.database import engine
from app.email_utils import send_welcome_email

router = APIRouter()

@router.post("/subscribe/")
async def subscribe(subscriber: SubscriberCreate, background_tasks: BackgroundTasks):
    with Session(engine) as session:
        db_subscriber = session.exec(select(Subscriber).where(Subscriber.email == subscriber.email)).first()
        if db_subscriber:
            return {"message": "Email already subscribed"}
        
        new_subscriber = Subscriber(email=subscriber.email)
        session.add(new_subscriber)
        session.commit()
        session.refresh(new_subscriber)

    background_tasks.add_task(send_welcome_email, subscriber.email)
    return {"message": "Successfully subscribed"}