from pydantic import BaseModel

class DonationRequest(BaseModel):
    amount: int
    currency: str

class SubscriptionRequest(BaseModel):
    price_id: str