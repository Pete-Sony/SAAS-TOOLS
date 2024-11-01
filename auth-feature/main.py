# Add imports here
from  typing import Annotated

from fastapi import FastAPI, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from application.utils import VerifyToken

# Scheme for token authentication
auth_scheme = HTTPBearer()

# The live application
app = FastAPI()
auth = VerifyToken()

# Api routes (will be changed in the future)
@app.get("/public")
def public():
    return {"message": "Hello World"}

@app.get("/private")
def private(auth_result: str = Security(auth.verify)):
    return auth_result

# The main application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
