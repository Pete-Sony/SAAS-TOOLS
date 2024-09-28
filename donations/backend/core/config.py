from pydantic_settings import BaseSettings, SettingsConfigDict
from dotenv import find_dotenv

from functools import lru_cache

class Settings(BaseSettings):
    stripe_secret_key: str 
    stripe_webhook_secret: str
    supabase_url: str
    supabase_key: str
    domain_name: str = 'http://localhost:8000'

    model_config = SettingsConfigDict(env_file=find_dotenv())

@lru_cache
def get_settings():
    return Settings()