from fastapi import Depends, HTTPException
from fastapi import security
from fastapi.security import HTTPAuthorizationCredentials
from database import client


def verify_jwt(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        user = client.auth.get_user(token)
        if not user:
            raise HTTPException(status_code=401, detail="Invalid token")
        
        return user
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))