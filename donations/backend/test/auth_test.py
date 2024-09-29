from jose import jwt
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv

load_dotenv()

# Your Supabase service role key
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

# Create a test payload (claims) for the JWT
# `sub` is typically the user ID (subject of the token)
payload = {
    "sub": "0001",  # Replace with a valid user_id or mock one
    "iat": datetime.utcnow(),
    "exp": datetime.utcnow() + timedelta(hours=1),  # Token expires in 1 hour
    "name": "user",  # Role claim, usually "authenticated" or "service_role"
}

# Create the JWT token using the service key
token = jwt.encode(payload, SUPABASE_SERVICE_KEY, algorithm="HS256")

print(f"Generated JWT Token: {token}")

