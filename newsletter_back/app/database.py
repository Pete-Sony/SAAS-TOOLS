from sqlmodel import create_engine, SQLModel

DATABASE_URL = "postgresql+psycopg2://myuser:mypassword@localhost:5432/mydatabase"
engine = create_engine(DATABASE_URL)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
