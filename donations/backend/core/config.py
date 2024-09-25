from pydantic_settings import BaseSettings, SettingsConfigDict

from functools import lru_cache

class Settings(BaseSettings):
    stripe_secret_key: str 
    stripe_webhook_secret: str
    domain_name: str = 'http://localhost:8000'

    model_config = SettingsConfigDict(env_file=".env")

@lru_cache
def get_settings():
    return Settings()