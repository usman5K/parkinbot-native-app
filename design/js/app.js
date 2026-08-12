/* Parkin design prototype — navigation + mock state */

const FLOW = [
  { id: "01", file: "01-splash.html", label: "Splash" },
  { id: "02", file: "02-welcome.html", label: "Welcome" },
  { id: "03", file: "03-permissions.html", label: "Permissions" },
  { id: "04", file: "04-map-download.html", label: "Maps" },
  { id: "05", file: "05-home.html", label: "Home" },
  { id: "06", file: "06-park-confirm.html", label: "Park" },
  { id: "07", file: "07-photo.html", label: "Photo" },
  { id: "08", file: "08-parked.html", label: "Parked" },
  { id: "09", file: "09-navigate.html", label: "Navigate" },
  { id: "10", file: "10-leave-reminder.html", label: "Reminder" },
  { id: "11", file: "11-cleared.html", label: "Cleared" },
  { id: "12", file: "12-history.html", label: "History" },
  { id: "13", file: "13-history-detail.html", label: "Detail" },
  { id: "14", file: "14-settings.html", label: "Settings" },
];

const MOCK = {
  vehicle: "Bike · Honda CD70",
  spot: {
    label: "Block C · Pillar 12",
    address: "Dolmen Mall · Clifton",
    lat: 24.8138,
    lng: 67.0299,
    parkedAt: "2026-08-13T14:22:00",
    photo: true,
  },
  preference: {
    leaveDistanceM: 120,
    askOnLeave: true,
    defaultMode: "walk",
  },
  history: [
    {
      id: "h1",
      place: "Dolmen Mall · Clifton",
      detail: "Block C · Pillar 12",
      start: "Today 2:22 PM",
      duration: "1h 18m",
      mode: "Bike",
    },
    {
      id: "h2",
      place: "Ocean Mall",
      detail: "B2 · Yellow zone",
      start: "Aug 11 · 6:40 PM",
      duration: "2h 05m",
      mode: "Bike",
    },
    {
      id: "h3",
      place: "II Chundrigar Rd",
      detail: "Street side · near HBL",
      start: "Aug 9 · 11:10 AM",
      duration: "48m",
      mode: "Bike",
    },
    {
      id: "h4",
      place: "Lucky One Mall",
      detail: "Roof · Row F",
      start: "Aug 5 · 4:15 PM",
      duration: "3h 22m",
      mode: "Car",
    },
  ],
};

function currentFile() {
  const path = window.location.pathname;
  return path.split("/").pop() || "index.html";
}

function renderFlowChrome() {
  const file = currentFile();
  const idx = FLOW.findIndex((s) => s.file === file);
  if (idx < 0) return;

  const meta = document.createElement("div");
  meta.className = "flow-meta";
  meta.textContent = `Parkin flow · ${String(idx + 1).padStart(2, "0")} / ${FLOW.length} · ${FLOW[idx].label}`;
  document.body.appendChild(meta);

  const bar = documentCreateFragmentBar(idx);
  document.body.appendChild(bar);
}

function documentCreateFragmentBar(activeIdx) {
  const bar = document.createElement("nav");
  bar.className = "flow-bar";
  bar.setAttribute("aria-label", "Prototype screen flow");
  FLOW.forEach((s, i) => {
    const a = document.createElement("a");
    a.href = s.file;
    a.textContent = `${i + 1}`;
    a.title = s.label;
    if (i === activeIdx) a.classList.add("active");
    bar.appendChild(a);
  });
  return bar;
}

function go(file) {
  window.location.href = file;
}

function bindToggles() {
  document.querySelectorAll("[data-toggle]").forEach((el) => {
    el.addEventListener("click", () => el.classList.toggle("on"));
  });
}

function bindSegments() {
  document.querySelectorAll(".segment").forEach((seg) => {
    seg.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        seg.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const mode = btn.dataset.mode;
        const out = document.querySelector("[data-mode-label]");
        if (out && mode) {
          const labels = { walk: "Walking · 4 min", bike: "Bike · 2 min", car: "Drive · 1 min" };
          out.textContent = labels[mode] || mode;
        }
      });
    });
  });
}

function animateProgress(selector, to, ms = 2200) {
  const el = document.querySelector(selector);
  if (!el) return;
  const bar = el.querySelector("i");
  if (!bar) return;
  requestAnimationFrame(() => {
    bar.style.width = "8%";
    setTimeout(() => {
      bar.style.width = `${to}%`;
    }, 80);
  });
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatCoords(lat, lng) {
  return `${lat.toFixed(5)}°, ${lng.toFixed(5)}°`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderFlowChrome();
  bindToggles();
  bindSegments();

  document.querySelectorAll("[data-coords]").forEach((el) => {
    el.textContent = formatCoords(MOCK.spot.lat, MOCK.spot.lng);
  });
});

window.Parkin = { FLOW, MOCK, go, animateProgress };
