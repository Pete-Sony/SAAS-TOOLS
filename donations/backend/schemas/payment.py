from pydantic import BaseModel

class DonationRequst(BaseModel):
    amount: int
    currency: str