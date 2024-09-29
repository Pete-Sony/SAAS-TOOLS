from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from supabase import create_client, Client

from core.config import get_settings

settings = get_settings()

client: Client = create_client(settings.supabase_url, settings.supabase_key)
