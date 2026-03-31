# JobFlow

JobFlow is a smart job application platform that streamlines your job hunt from start to finish. Upload your resume, scrape live job listings from LinkedIn, and let JobFlow automatically fill out applications on your behalf — saving you time and effort.

---

## Features

- **Resume Upload** — Upload your PDF resume to power personalized job matching
- **LinkedIn Job Scraping** — Discover relevant job listings based on role and location
- **AI Fit Scoring** — Each job is scored based on how well it matches your resume
- **Application Auto-Filler** — Automatically fill job applications with your details
- **User-Friendly Interface** — Clean dashboard built for a smooth experience
- **Guidebook** — Step-by-step guide to help you get the most out of JobFlow

---

## Project Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:3000` by default.

### Backend

```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file in the `backend/` directory based on the example below:

```env
DATABASE_URL=YOUR_DATABASE_URL
API_KEY=YOUR_API_KEY
SECRET_KEY=YOUR_SECRET_KEY
```

Then start the server:

```bash
python main.py
```

> For detailed backend setup instructions, refer to [`backend/README.md`](backend/README.md).

---

## Project Structure

```
JobFlow/
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   ├── dashboard/
│   │   ├── guide/
│   │   └── page.tsx
│   └── package.json
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── README.md
├── extension/
└── README.md
```


