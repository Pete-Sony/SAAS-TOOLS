from sqlmodel import SQLModel, Field
from typing import Optional
from pydantic import EmailStr

class Subscriber(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True, unique=True)

class SubscriberCreate(SQLModel):
    email: EmailStr