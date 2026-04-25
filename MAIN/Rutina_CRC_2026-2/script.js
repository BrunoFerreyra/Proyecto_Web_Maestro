let routineData = {};

const monthScreen = document.getElementById("monthScreen");
const appShell = document.getElementById("appShell");
const loadError = document.getElementById("loadError");
const monthButtons = document.querySelectorAll("[data-routine-month]");
const backToMonths = document.getElementById("backToMonths");
const weekSelect = document.getElementById("weekSelect");
const weekChip = document.getElementById("weekChip");
const summaryList = document.getElementById("summaryList");
const routineView = document.getElementById("routineView");
const currentDayTitle = document.getElementById("currentDayTitle");
const currentDayDescription = document.getElementById("currentDayDescription");
const tabs = document.querySelectorAll(".tab");

let currentDay = "dia1";
let appInitialized = false;

function getWeekValue(exercise, weekNumber) {
  if (!exercise.week) return exercise.detail || "";
  return exercise.week[weekNumber - 1] || "-";
}

function getBlockTheme(block) {
  const name = block.name.toLowerCase();
  const badge = block.badge.toLowerCase();

  if (name.includes("activación")) return "activation";
  if (name.includes("aeróbico") || name.includes("bicicleta")) return "cardio";
  if (badge.includes("auxiliares")) return "aux";
  return "strength";
}

function renderSummary(dayData) {
  summaryList.innerHTML = "";
  dayData.summary.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    summaryList.appendChild(li);
  });
}

function renderBlocks(dayData, weekNumber) {
  routineView.innerHTML = "";

  dayData.blocks.forEach(block => {
    const blockEl = document.createElement("article");
    blockEl.className = `block block--${getBlockTheme(block)}`;

    const exercisesHtml = block.exercises.map(exercise => {
      const detailHtml = exercise.week && exercise.detail
        ? `<div class="exercise-meta"><span class="pill">${exercise.detail}</span></div>`
        : "";

      const videoAttrs = exercise.videoId
        ? ` data-video-id="${exercise.videoId}" role="button" tabindex="0" aria-label="Ver video de ${exercise.name}"`
        : "";

      return `
        <article class="exercise${exercise.videoId ? " exercise--video" : ""}"${videoAttrs}>
          <div class="exercise-top">
            <div>
              <div class="exercise-type">${exercise.type}</div>
              <h4 class="exercise-name">${exercise.name}</h4>
            </div>
            <div class="exercise-value">${getWeekValue(exercise, weekNumber)}</div>
          </div>
          ${detailHtml}
        </article>
      `;
    }).join("");

    blockEl.innerHTML = `
      <div class="block-header">
        <h3>${block.name}</h3>
        <span class="badge">${block.badge}</span>
      </div>
      <div class="block-content">
        ${exercisesHtml}
      </div>
    `;

    routineView.appendChild(blockEl);
  });
}

function openVideoModal(videoId) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");

  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");

  iframe.src = "";
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function mostrarPantallaInicial() {
  closeVideoModal();
  appShell.hidden = true;
  monthScreen.hidden = false;
  loadError.textContent = "";
  window.scrollTo({ top: 0, behavior: "auto" });
}

function mostrarRutina() {
  monthScreen.hidden = true;
  appShell.hidden = false;
  window.scrollTo({ top: 0, behavior: "auto" });
}

async function cargarRutina(mes) {
  try {
    const response = await fetch(`data/${mes}.json`);

    if (!response.ok) {
      throw new Error(`No se pudo cargar data/${mes}.json (${response.status})`);
    }

    routineData = await response.json();
    return routineData;
  } catch (error) {
    console.error("Error al cargar la rutina:", error);
    throw error;
  }
}

async function seleccionarRutina(mes) {
  const selectedButton = document.querySelector(`[data-routine-month="${mes}"]`);
  loadError.textContent = "";
  monthButtons.forEach(button => {
    button.disabled = true;
    button.classList.toggle("is-loading", button === selectedButton);
  });

  try {
    await cargarRutina(mes);

    if (!appInitialized) {
      initApp();
      appInitialized = true;
    }

    currentDay = "dia1";
    weekSelect.value = "1";
    tabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.day === currentDay);
    });
    renderDay(currentDay);
    mostrarRutina();
  } catch (error) {
    loadError.textContent = `No se pudo cargar la rutina de ${mes}. Probá de nuevo o verificá que exista data/${mes}.json.`;
  } finally {
    monthButtons.forEach(button => {
      button.disabled = false;
      button.classList.remove("is-loading");
    });
  }
}

function renderDay(dayKey) {
  if (!routineData || !routineData[dayKey]) {
    routineView.innerHTML = "<p class=\"load-error\">No se encontró la información de esta rutina.</p>";
    summaryList.innerHTML = "";
    return;
  }

  const weekNumber = Number(weekSelect.value);
  const dayData = routineData[dayKey];

  currentDayTitle.textContent = dayData.title;
  currentDayDescription.textContent = dayData.description;
  weekChip.textContent = `Semana ${weekNumber}`;

  renderSummary(dayData);
  renderBlocks(dayData, weekNumber);
}

function initApp() {
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentDay = tab.dataset.day;
      renderDay(currentDay);
    });
  });

  weekSelect.addEventListener("change", () => {
    renderDay(currentDay);
  });

  routineView.addEventListener("click", event => {
    const exercise = event.target.closest("[data-video-id]");
    if (!exercise) return;

    openVideoModal(exercise.dataset.videoId);
  });

  routineView.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const exercise = event.target.closest("[data-video-id]");
    if (!exercise) return;

    event.preventDefault();
    openVideoModal(exercise.dataset.videoId);
  });

  document.getElementById("videoModalClose").addEventListener("click", closeVideoModal);

  document.getElementById("videoModal").addEventListener("click", event => {
    if (event.target === event.currentTarget) {
      closeVideoModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeVideoModal();
    }
  });
}

monthButtons.forEach(button => {
  button.addEventListener("click", () => {
    seleccionarRutina(button.dataset.routineMonth);
  });
});

backToMonths.addEventListener("click", mostrarPantallaInicial);
