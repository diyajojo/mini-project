const btn = document.getElementById("autofill-btn");
const statusEl = document.getElementById("status");
const statusIcon = document.getElementById("status-icon");

const ICONS = {
  idle: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#2d5c47" stroke-width="2"/>
    <path d="M12 8v4M12 16h.01" stroke="#2d5c47" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  loading: `<div class="spinner"></div>`,
  success: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(16,185,129,0.15)" stroke="#34d399" stroke-width="1.5"/>
    <path d="M8 12l3 3 5-5" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  error: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(239,68,68,0.12)" stroke="#f87171" stroke-width="1.5"/>
    <path d="M15 9l-6 6M9 9l6 6" stroke="#f87171" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
};

function setStatus(state, text) {
  statusIcon.innerHTML = ICONS[state];
  statusEl.textContent = text;
  statusEl.className = state === "error" ? "error" : state === "success" ? "success" : "";
}

function setButtonLoading(loading) {
  btn.disabled = loading;
  btn.innerHTML = loading
    ? `<div class="spinner"></div> Scanning form…`
    : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
       Auto-fill Application Form`;
}

btn.addEventListener("click", () => {
  setButtonLoading(true);
  setStatus("loading", "Scanning page for form fields…");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0]) {
      setStatus("error", "No active tab found.");
      setButtonLoading(false);
      return;
    }

    chrome.tabs.sendMessage(tabs[0].id, { type: "TRIGGER_AUTOFILL" }, (response) => {
      if (chrome.runtime.lastError) {
        setStatus("error", "Could not connect to page script.");
        setButtonLoading(false);
        return;
      }

      if (response && response.success) {
        setStatus("success", "Form successfully auto-filled!");
      } else {
        setStatus("error", response ? response.error : "Unknown error occurred.");
      }

      setTimeout(() => window.close(), 3000);
    });
  });
});
