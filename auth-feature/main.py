# Add imports here
from  typing import Annotated
from typing_extensions import Dict

from fastapi import FastAPI, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from application.utils import VerifyToken
from example_crud.database import SessionDep, create_db_and_tables
from example_crud.models import User, Post

from sqlalchemy import select

# Scheme for token authentication
auth_scheme = HTTPBearer()

# The live application
app = FastAPI()
auth = VerifyToken()

#This is for database integration (go for migrations in production and not creating table on startup)
@app.on_event("startup")
def on_startup():
    create_db_and_tables()

# Api routes (will be changed in the future)
@app.get("/public")
def public():
    return {"message": "Hello World"}

@app.get("/users/create")
def user_create(session: SessionDep, auth_result: Dict = Security(auth.verify), ):
    email = auth_result['email']
    db_user = User(email=email)
    session.add(db_user) # type:ignore
    session.commit() # type:ignore
    session.refresh(db_user) # type:ignore
    return db_user

@app.get("/users/")
def list_user(session: SessionDep):
    qry = select(User)
    db_user = session.scalars(qry).all()
    return [
        {
            "email" : user.email
        }
        for user in db_user
    ]
    # return db_user

@app.post("/posts/create")
def post_create(session: SessionDep,  content: str, auth_result: Dict = Security(auth.verify)):
    email = auth_result['email']
    db_user = session.scalars(select(User).where(User.email == email)).first()
    if not db_user:
        raise ValueError("User does not exist")
    db_post = Post(content=content, user_id=db_user.id) # type:ignore
    session.add(db_post) # type:ignore
    session.commit() # type:ignore
    session.refresh(db_post) # type:ignore
    return db_post

@app.get("/posts")
def list_post(session: SessionDep):
    posts = session.execute(select(Post, User).join(Post.user))
    return [
        {
            "content": post.Post.content,
            "email": post.User.email
        }
        for post in posts
    ]

@app.put("/posts/{post_id}")
def update_post(session:SessionDep, post_id: int, content: str, auth_result: Dict = Security(auth.verify)):
    email = auth_result['email']
    post = session.scalars(select(Post).where(Post.id == post_id)).first()
    if not post:
        raise ValueError("Post does not exist")
    if post.user.email != email:
        raise ValueError("You are not the owner of this post")
    post.content = content
    session.commit()
    session.refresh(post)
    return post

@app.delete("/posts/{post_id}")
def delete_post(session:SessionDep, post_id: int, auth_result: Dict = Security(auth.verify)):
    email = auth_result['email']
    post = session.scalars(select(Post).where(Post.id == post_id)).first()
    if not post:
        raise ValueError("Post does not exist")
    if post.user.email != email:
        raise ValueError("You are not the owner of this post")
    session.delete(post)
    session.commit()
    return {"message": "Post deleted"}

@app.get("/{user_id}/posts")
def list_user_post(session: SessionDep, user_id: int):
    posts = session.scalars(select(Post).where(Post.user_id == user_id)).all()
    return [
        {
            "content": post.content,
            "email": post.user.email
        }
        for post in posts
    ]

# The main application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
