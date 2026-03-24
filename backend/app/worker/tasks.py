import base64

from sqlmodel import Session, select

from app.core.db import engine
from app.models.models import Job, Resume
from app.services.discovery import DiscoveryService
from app.services.parsing import ParsingService
from app.worker.celery_app import celery_app


@celery_app.task(bind=True, max_retries=3)
def parse_resume_task(self, resume_id: int, pdf_b64: str) -> None:
    """Parse PDF bytes and update Resume.markdown_content."""
    try:
        pdf_bytes = base64.b64decode(pdf_b64)
        markdown = ParsingService.parse(pdf_bytes)
        with Session(engine) as session:
            resume = session.get(Resume, resume_id)
            if resume:
                resume.markdown_content = markdown
                session.add(resume)
                session.commit()
    except Exception as exc:
        raise self.retry(exc=exc, countdown=10)


@celery_app.task(bind=True, max_retries=3)
def discover_jobs_task(self, user_id: int, title: str, location: str, limit: int = 20, search_id: int | None = None) -> None:
    """Scrape jobs via Apify and persist as Job records, deduplicating by (user_id, url)."""
    from app.models.models import JobSearchResult
    try:
        jobs = DiscoveryService.discover(title, location, limit)
        with Session(engine) as session:
            for job in jobs:
                url = job["url"]
                existing = session.exec(
                    select(Job).where(Job.user_id == user_id, Job.url == url)
                ).first() if url else None

                if existing:
                    job_id = existing.id
                else:
                    new_job = Job(
                        user_id=user_id,
                        title=job["title"],
                        company=job["company"],
                        description=job["description"],
                        url=url,
                    )
                    session.add(new_job)
                    session.flush()
                    job_id = new_job.id

                if search_id is not None:
                    session.merge(JobSearchResult(search_id=search_id, job_id=job_id))

            session.commit()
    except Exception as exc:
        raise self.retry(exc=exc, countdown=30)
