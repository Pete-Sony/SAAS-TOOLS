import os

import aiosmtplib
from email.message import EmailMessage

from app.models import Subscriber
from app.database import engine
from sqlmodel import Session, select


SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USERNAME = os.getenv("SMTP_USERNAME")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

async def send_email_async(to_email: str, subject: str, content: str):
    message = EmailMessage()
    message["From"] = SMTP_USERNAME
    message["To"] = to_email
    message["Subject"] = subject
    message.add_alternative(content, subtype="html")

    async with aiosmtplib.SMTP(hostname=SMTP_SERVER, port=SMTP_PORT, use_tls=False, start_tls=False) as server:
        await server.starttls()
        await server.login(SMTP_USERNAME, SMTP_PASSWORD)
        await server.send_message(message)

async def send_welcome_email(email: str):
    subject = "Welcome to Our Newsletter!"
    content = """
    <html>
        <body>
            <h1>Welcome to Our Newsletter!</h1>
            <p>Thank you for subscribing. We're excited to have you on board!</p>
        </body>
    </html>
    """
    await send_email_async(email, subject, content)

async def send_newsletter():
    while True:
        with Session(engine) as session:
            subscribers = session.exec(select(Subscriber)).all()

        subject = "Your Weekly Newsletter"
        content = """
        <html>
            <body>
                <h1>Your Weekly Newsletter</h1>
                <p>Here's what's new this week...</p>
                <!-- Add your newsletter content here -->
            </body>
        </html>
        """

        for subscriber in subscribers:
            await send_email_async(subscriber.email, subject, content)
        
        # Wait for one week before sending the next newsletter
        import asyncio
        await asyncio.sleep(7 * 24 * 60 * 60)