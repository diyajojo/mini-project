from fastapi import FastAPI
from app.core.db import create_db_and_tables

app = FastAPI(title="Job Autofiller API", version="1.0.0")


@app.on_event("startup")
def on_startup():
    create_db_and_tables()


@app.get("/health")
def health():
    return {"status": "ok"}
