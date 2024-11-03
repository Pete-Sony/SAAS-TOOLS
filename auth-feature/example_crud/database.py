from typing import Annotated

from sqlalchemy import create_engine
from sqlalchemy.orm import Session, DeclarativeBase
from fastapi import Depends

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"
connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)

class Base(DeclarativeBase):
    pass

def create_db_and_tables():
    Base.metadata.create_all(bind=engine)

def get_session():
    with Session(engine) as session:
        yield session

SessionDep = Annotated[Session, Depends(get_session)]
