const routineData = {
  dia1: {
    title: "Día 1",
    description: "Fuerza de tren inferior, empuje horizontal y trabajo aeróbico.",
    summary: [
      "Activación con movilidad de tobillo, cadera, tórax, pallof press y caminata valija.",
      "Bloques principales con tirones de arranque, sentadilla atrás, pecho plano e hip thrust 1 pierna.",
      "Accesorios: vuelos laterales, cuello con banda, encogimientos y abdomen barquito.",
      "Final aeróbico intermitente por pasadas largas."
    ],
    blocks: [
      {
        name: "Activación",
        badge: "2 y 3 vueltas",
        exercises: [
          { type: "Movilidad", name: "Tobillo en banco + bandas", detail: "x 5 c/l" },
          { type: "Movilidad", name: "Cadera rotación externa en banco", detail: "x 5 c/l" },
          { type: "Movilidad", name: "Tórax en banco con bastón", detail: "x 5 c/l" },
          { type: "Movilidad", name: "Carpa a foca", detail: "x 6" },
          { type: "Activación", name: "Rechazo escapular con bandas", detail: "x 10" },
          { type: "Activación", name: "Pallof press con disco", detail: "x 10 c/l" },
          { type: "Activación", name: "Desaceleración parado freno en estocada", detail: "x 5 c/l" },
          { type: "Activación", name: "Caminata valija con barra", detail: "x 5 mts c/l" }
        ]
      },
      {
        name: "Bloque 1",
        badge: "SCM",
        exercises: [
          { type: "EMI", name: "Tirones de arranque desde colgado", week: ["3 x 5", "4 x 5", "5-5-4-4", "4 x 4"] },
          { type: "TMS", name: "Salto vertical desde sentado", week: ["3 x 4", "4 x 4", "4 x 5", "4 x 5"] },
          { type: "TMS", name: "Lanzamiento de pecho en básico", week: ["3 x 4", "4 x 4", "4 x 5", "4 x 5"] }
        ]
      },
      {
        name: "Bloque 2",
        badge: "Fuerza",
        exercises: [
          { type: "EMI", name: "Sentadilla atrás", week: ["3 x 5", "4 x 5", "5-5-4-4", "3 x 4"] },
          { type: "TMS", name: "Remo bajo a 1 brazo tipo scrum", week: ["3 x 8 c/l", "4 x 8 c/l", "4 x 8 c/l", "3 x 10 c/l"] }
        ]
      },
      {
        name: "Bloque 3",
        badge: "Fuerza",
        exercises: [
          { type: "TMS", name: "Pecho plano con barra", week: ["3 x 5", "4 x 5", "5-5-4-4", "3 x 4"] },
          { type: "EMI", name: "Hip thrust 1 pierna", week: ["3 x 6 c/l", "4 x 6 c/l", "6-6-5-5 c/l", "3 x 5 c/l"] }
        ]
      },
      {
        name: "Bloque 4",
        badge: "Auxiliares",
        exercises: [
          { type: "AUX", name: "Vuelos laterales + cuello con banda", week: ["3 x 8", "4 x 8", "4 x 8", "3 x 10"] },
          { type: "AUX", name: "Encogimiento con mancuernas", week: ["3 x 8", "4 x 8", "4 x 8", "3 x 10"] },
          { type: "ZM", name: "Abd barquito con peso", week: ['3 x 20"', '4 x 20"', '4 x 20"', '3 x 25"'] }
        ]
      },
      {
        name: "Aeróbico",
        badge: "Intermitente",
        exercises: [
          { type: "Cardio", name: 'Correr largo de la cuadra en menos de 20"', week: ["2 x 8", "3 x 6", "3 x 6", "4 x 5"], detail: 'Pausa 30" entre pasadas y 2 min entre series' }
        ]
      }
    ]
  },

  dia2: {
    title: "Día 2",
    description: "Bisagra de cadera, hombro, dominadas y circuito tabata.",
    summary: [
      "Activación enfocada en aductores, hombros, psoas y control lumbo-pélvico.",
      "Bloque principal con cargada, peso muerto, press unilateral y dominadas asistidas.",
      "Trabajo de trineo, vuelo frontal, Y en TRX y caminata contrapeso.",
      "Final aeróbico tipo circuito tabata."
    ],
    blocks: [
      {
        name: "Activación",
        badge: "2 y 3 vueltas",
        exercises: [
          { type: "Movilidad", name: "Movilidad de tobillo en banco inclinado", detail: "x 5 c/l" },
          { type: "Movilidad", name: "Aductores + rotación de tórax", detail: "x 5 c/l" },
          { type: "Movilidad", name: "Dislocaciones de hombro con bastón", detail: "x 10" },
          { type: "Movilidad", name: "Psoas-ilíaco", detail: "x 5 c/l" },
          { type: "Core", name: "Plancha baja con dos apoyos", detail: 'x 20" c/l' },
          { type: "Core", name: "Extensión lumbar en banco plano", detail: 'x 30"' },
          { type: "Core", name: "Plancha Copenhague", detail: 'x 20" c/l' },
          { type: "Movilidad", name: "Sentadilla profunda + press abajo", detail: "x 10" }
        ]
      },
      {
        name: "Bloque 1",
        badge: "SCM",
        exercises: [
          { type: "EMI", name: "Cargada desde colgado", week: ["3 x 5", "4 x 5", "5-5-4-4", "4 x 4"] },
          { type: "TMS", name: "Salto horizontal resistido con banda", week: ["3 x 4", "4 x 4", "4 x 5", "4 x 5"] },
          { type: "TMS", name: "Lanzamiento horizontal sobre cabeza en básico", week: ["3 x 4", "4 x 4", "4 x 5", "4 x 5"] }
        ]
      },
      {
        name: "Bloque 2",
        badge: "Fuerza",
        exercises: [
          { type: "EMS", name: "Peso muerto con barra", week: ["3 x 5", "4 x 5", "5-5-4-4", "3 x 4"] },
          { type: "TMI", name: "Press de hombro con mancuerna en media estocada a 1 brazo", week: ["3 x 8 c/l", "4 x 8 c/l", "4 x 8 c/l", "3 x 10 c/l"] },
          { type: "TMI", name: "Dominadas asistidas con banda", week: ["3 x MAX", "4 x MAX", "4 x MAX", "3 x MAX"] }
        ]
      },
      {
        name: "Bloque 3",
        badge: "Auxiliares",
        exercises: [
          { type: "EMS", name: "Trineo de empuje", week: ["3 x 10 mts", "4 x 10 mts", "4 x 10 mts", "3 x 12 mts"] },
          { type: "AUX", name: "Vuelo frontal", week: ["3 x 8", "4 x 8", "4 x 8", "3 x 10"] },
          { type: "AUX", name: "Y en TRX", week: ["3 x 8", "4 x 8", "4 x 8", "3 x 10"] },
          { type: "ZM", name: "Caminata contrapeso", week: ["3 x 10 mts c/l", "4 x 10 mts c/l", "4 x 10 mts c/l", "3 x 12 mts c/l"] }
        ]
      },
      {
        name: "Aeróbico",
        badge: "Circuito Tabata",
        exercises: [
          { type: "Circuito", name: '20" trabajo x 20" pausa', week: ["3 vueltas", "4 vueltas", "4 vueltas", "5 vueltas"], detail: "Oso, bisagra con disco, pecho al piso, biceps+hombros, monigotes" }
        ]
      }
    ]
  },

  dia3: {
    title: "Día 3",
    description: "Potencia unilateral, torso y bici de velocidad.",
    summary: [
      "Activación con cadera, hombro 90/90, escorpión, gigante y puente en TRX.",
      "Potencia con arranque a 1 brazo, hop lateral y lanzamiento rotacional.",
      "Trabajo principal de hombro, pecho inclinado, remo y brazos.",
      "Cierre en bicicleta con pasadas de velocidad."
    ],
    blocks: [
      {
        name: "Activación",
        badge: "2 y 3 vueltas",
        exercises: [
          { type: "Movilidad", name: "Circunducción de cadera en supino", detail: "x 5 c/l" },
          { type: "Movilidad", name: "Rotación interna-externa de hombro 90/90", detail: "x 8" },
          { type: "Movilidad", name: "Escorpión boca abajo", detail: "x 5 c/l" },
          { type: "Movilidad", name: "Gigante", detail: "x 5 c/l" },
          { type: "Core", name: "Twist soviético", detail: 'x 30"' },
          { type: "Activación", name: "Puente de glúteos en TRX", detail: 'x 30"' },
          { type: "Movilidad", name: "Rolidos con barra", detail: 'x 30"' },
          { type: "Activación", name: "Marcha en trineo aceleración 45°", detail: "x 10 mts" }
        ]
      },
      {
        name: "Bloque 1",
        badge: "Potencia",
        exercises: [
          { type: "EMI", name: "Arranque a 1 brazo desde colgado", week: ["3 x 4 c/l", "4 x 4 c/l", "4-4-3-3 c/l", "4 x 3 c/l"] },
          { type: "TMS", name: "Hop lateral medial", week: ["3 x 4 c/l", "4 x 4 c/l", "4 x 5 c/l", "4 x 5 c/l"] },
          { type: "TMS", name: "Lanzamiento rotacional desde cadera en básico", week: ["3 x 4 c/l", "4 x 4 c/l", "4 x 5 c/l", "4 x 5 c/l"] }
        ]
      },
      {
        name: "Bloque 2",
        badge: "Torso",
        exercises: [
          { type: "TMS", name: "Press de hombro con barra parado", week: ["3 x 8", "4 x 8", "4 x 8", "3 x 6"] },
          { type: "EMI", name: "Remo al mentón con mancuerna", week: ["3 x 8", "4 x 8", "4 x 8", "3 x 10"] },
          { type: "EMS", name: "Pecho inclinado con mancuerna", week: ["3 x 8", "4 x 8", "4 x 8", "3 x 10"] }
        ]
      },
      {
        name: "Bloque 3",
        badge: "Auxiliares",
        exercises: [
          { type: "TMI", name: "Remo con mancuernas en banco inclinado", week: ["3 x 8", "4 x 8", "4 x 8", "3 x 10"] },
          { type: "AUX", name: "Tríceps con mancuerna", week: ["3 x 8", "4 x 8", "4 x 8", "3 x 10"] },
          { type: "AUX", name: "Bíceps con mancuernas", week: ["3 x 8", "4 x 8", "4 x 8", "3 x 10"] },
          { type: "ZM", name: "Twist soviético con peso", week: ["3 x 10 c/l", "4 x 10 c/l", "4 x 10 c/l", "3 x 12 c/l"] }
        ]
      },
      {
        name: "Bicicleta",
        badge: "Velocidad",
        exercises: [
          { type: "Cardio", name: "Pasadas de velocidad", week: ["8 rep", "10 rep", "10 rep", "12 rep"], detail: '10" max vel x 50" suave' }
        ]
      }
    ]
  }
};

const weekSelect = document.getElementById("weekSelect");
const weekChip = document.getElementById("weekChip");
const summaryList = document.getElementById("summaryList");
const routineView = document.getElementById("routineView");
const currentDayTitle = document.getElementById("currentDayTitle");
const currentDayDescription = document.getElementById("currentDayDescription");
const tabs = document.querySelectorAll(".tab");

let currentDay = "dia1";

function getWeekValue(exercise, weekNumber) {
  if (!exercise.week) return exercise.detail || "";
  return exercise.week[weekNumber - 1] || "-";
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
    blockEl.className = "block";

    const exercisesHtml = block.exercises.map(exercise => `
      <article class="exercise">
        <div class="exercise-top">
          <div>
            <div class="exercise-type">${exercise.type}</div>
            <h4 class="exercise-name">${exercise.name}</h4>
          </div>
          <div class="exercise-value">${getWeekValue(exercise, weekNumber)}</div>
        </div>
        <div class="exercise-meta">
          ${exercise.detail ? `<span class="pill">${exercise.detail}</span>` : ""}
          <span class="pill">Semana ${weekNumber}</span>
        </div>
      </article>
    `).join("");

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

function renderDay(dayKey) {
  const weekNumber = Number(weekSelect.value);
  const dayData = routineData[dayKey];

  currentDayTitle.textContent = dayData.title;
  currentDayDescription.textContent = dayData.description;
  weekChip.textContent = `Semana ${weekNumber}`;

  renderSummary(dayData);
  renderBlocks(dayData, weekNumber);
}

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

renderDay(currentDay);
