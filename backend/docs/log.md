# Command Log

| # | Command | Explanation |
|---|---------|-------------|
| 1 | `uv init --no-workspace` | Initializes a new uv-managed Python project, creating `pyproject.toml` |
| 2 | `uv add fastapi uvicorn[standard] sqlmodel psycopg2-binary celery redis python-dotenv groq apify-client pydantic-settings alembic` | Installs all core backend dependencies and locks them in `pyproject.toml` |
| 3 | `mkdir -p app/{api,core,models,services,worker} tests` | Creates the full project directory structure |
| 4 | `chmod +x setup.sh` | Makes the setup script executable |
| 5 | `uv run alembic init alembic` | Initializes Alembic migration framework with config and versions directory |

---

## Phase 1 Complete — Files Created

| File | Purpose |
|------|---------|
| `app/models/models.py` | `User`, `Resume`, `Job` SQLModel tables |
| `app/main.py` | FastAPI entry point + DB init on startup |
| `app/core/config.py` | Settings from `.env` |
| `app/core/db.py` | Engine + session + table creation |
| `docker-compose.yml` | `db`, `redis`, `api`, `worker` containers |
| `Dockerfile` | uv-based image |
| `setup.sh` | One-command team bootstrap |
| `.env.example` | Env var template |
| `alembic/` | DB migrations wired to SQLModel metadata |
