import Link from "next/link";
import Navbar from "./components/Navbar";

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#060d1a", position: "relative", overflowX: "hidden" }}>
      {/* Ambient blobs */}
      <div
        style={{
          position: "fixed",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          maxWidth: "900px",
          height: "700px",
          background: "radial-gradient(ellipse at center, rgba(16,185,129,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "0%",
          right: "-15%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(6,95,70,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        {/* ── HERO ── */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full glow-pulse" style={{ background: "#10b981" }} />
            <span style={{ color: "#6ee7b7", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>
              AI-Powered Job Search
            </span>
          </div>

          <h1
            className="mb-6 leading-tight"
            style={{ color: "#ecfdf5", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 3.5rem)", letterSpacing: "-0.04em", lineHeight: 1.1 }}
          >
            Your resume.{" "}
            <span style={{ color: "#10b981" }}>Your dream job.</span>
            <br />
            On autopilot.
          </h1>

          <p
            className="max-w-2xl mx-auto mb-10"
            style={{ color: "#a7f3d0", fontWeight: 500, fontSize: "1.125rem", lineHeight: 1.7 }}
          >
            Upload your resume once. JobFlow scrapes LinkedIn for the best matching roles,
            scores them with AI, and shows you exactly why each job fits — so you apply
            smarter, not harder.
          </p>

          {/* Feature badges */}
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            {[
              { label: "Resume Parsing", icon: "📄" },
              { label: "LinkedIn Scraping", icon: "🔍" },
              { label: "AI Fit Scoring", icon: "🤖" },
              { label: "Auto Job Filling", icon: "⚡" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.12)" }}
              >
                <span style={{ fontSize: "0.875rem" }}>{item.icon}</span>
                <span style={{ color: "#6ee7b7", fontSize: "0.8125rem", fontWeight: 600 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT IS JOBFLOW ── */}
        <section className="py-12" style={{ borderTop: "1px solid rgba(16,185,129,0.07)" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 style={{ color: "#ecfdf5", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.03em" }}>
                What is JobFlow?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#6ee7b7", fontSize: "1rem", lineHeight: 1.7, fontWeight: 500 }}>
                JobFlow combines resume intelligence with live job discovery. Instead of manually
                searching and re-entering your details into dozens of forms, let AI handle the
                heavy lifting — from extraction to evaluation to application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8L14 2z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 2v6h6M9 13h6M9 17h4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ),
                  title: "Resume Parsing",
                  desc: "Upload your PDF resume once. We extract your skills, experience, and background using AI — no manual input required.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="8" stroke="#10b981" strokeWidth="2" />
                      <path d="M21 21l-4.35-4.35" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ),
                  title: "Job Scraping",
                  desc: "We scrape LinkedIn in real time for jobs matching your role, location, and desired count — no stale listings, no subscription needed.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: "AI Fit Scoring",
                  desc: "Groq AI evaluates each job against your resume and gives a 1–10 fit score with a plain-English explanation of why it matches.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: "Auto Job Filling",
                  desc: "Apply with one click using our Chrome extension. It automatically fills job application forms with your parsed resume details.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-5"
                  style={{ background: "linear-gradient(135deg, #071020 0%, #0a1628 100%)", border: "1px solid rgba(16,185,129,0.14)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.18)" }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="mb-1.5" style={{ color: "#ecfdf5", fontWeight: 700, fontSize: "0.9375rem", letterSpacing: "-0.02em" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#6ee7b7", fontSize: "0.8125rem", lineHeight: 1.6, fontWeight: 500 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        

       

        {/* ── FOOTER ── */}
        <footer className="py-8 text-center" style={{ borderTop: "1px solid rgba(16,185,129,0.08)" }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #065f46, #10b981)" }}
            >
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                <path d="M9 12h6M9 16h6M9 8h3M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span style={{ color: "#2d5c47", fontSize: "0.875rem", fontWeight: 700 }}>JobFlow</span>
          </div>
          <p style={{ color: "#2d5c47", fontSize: "0.75rem", fontWeight: 500 }}>
            Powered by LinkedIn scraping &amp; Groq AI
          </p>
        </footer>
      </div>
    </div>
  );
}
