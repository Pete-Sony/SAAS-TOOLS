from pydantic import BaseModel

class User(BaseModel):
    customer_id: str