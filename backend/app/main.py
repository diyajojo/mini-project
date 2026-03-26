from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import jobs, resumes
from app.api.extension_rest import router as extension_rest_router
from app.api.extension_ws import router as extension_ws_router
from app.core.db import create_db_and_tables, seed_default_user

app = FastAPI(title="Job Autofiller API", version="4.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()
    seed_default_user()


app.include_router(resumes.router)
app.include_router(jobs.router)
app.include_router(extension_rest_router)
app.include_router(extension_ws_router)


@app.get("/health")
def health():
    return {"status": "ok"}
