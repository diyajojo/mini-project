from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlmodel import Session, select

from app.core.db import get_session
from app.models.models import Job, JobSearch, JobSearchResult
from app.worker.celery_app import celery_app
from app.worker.tasks import discover_jobs_task

router = APIRouter(prefix="/jobs", tags=["jobs"])


class DiscoverRequest(BaseModel):
    user_id: int
    title: str
    location: str
    limit: int = 20


@router.post("/discover")
def discover_jobs(body: DiscoverRequest, session: Session = Depends(get_session)):
    search = JobSearch(user_id=body.user_id, title=body.title, location=body.location)
    session.add(search)
    session.commit()
    session.refresh(search)

    task = discover_jobs_task.delay(body.user_id, body.title, body.location, body.limit, search.id)

    search.task_id = task.id
    session.add(search)
    session.commit()

    return {"task_id": task.id, "search_id": search.id, "status": "discovering"}


@router.get("/discover/{task_id}/status")
def discover_status(task_id: str):
    result = celery_app.AsyncResult(task_id)
    return {"task_id": task_id, "state": result.state}


@router.get("/")
def list_jobs(user_id: int, search_id: int | None = None, session: Session = Depends(get_session)):
    if search_id is not None:
        jobs = session.exec(
            select(Job)
            .join(JobSearchResult, Job.id == JobSearchResult.job_id)
            .where(JobSearchResult.search_id == search_id)
            .where(Job.user_id == user_id)
        ).all()
    else:
        jobs = session.exec(select(Job).where(Job.user_id == user_id)).all()
    return jobs
