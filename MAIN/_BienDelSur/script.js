

const form = document.getElementById('registro-form');
const mensaje = document.getElementById('mensaje');

// REEMPLAZÁ ESTA URL POR LA DE TU SCRIPT
const scriptURL =  'https://script.google.com/macros/s/AKfycbxbTt21dMzn6BYte0yolfZhU1rNG2j03WBjQIR3urdkn1YB9Torfg2fgwYBC3AqK3po/exec';

// Función para mostrar cupos disponibles
function cargarCupos() {
  fetch(scriptURL)
    .then(res => res.json())
    .then(data => {
      document.getElementById('cupos-turno1').textContent = `Turno 1: quedan ${data.turno1} lugares`;
      document.getElementById('cupos-turno2').textContent = `Turno 2: quedan ${data.turno2} lugares`;
    })
    .catch(error => {
      console.error("Error al obtener cupos:", error);
      document.getElementById('cupos-turno1').textContent = "Turno 1: error al cargar";
      document.getElementById('cupos-turno2').textContent = "Turno 2: error al cargar";
    });
}

// Llamamos al cargar la página
cargarCupos();

// Al enviar el formulario
form.addEventListener('submit', e => {
  e.preventDefault();

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';

  const data = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: data
  })
  .then(response => {
    mensaje.textContent = '¡Gracias por inscribirte! Te esperamos.';
    form.reset();
    cargarCupos();
  })
  .catch(error => {
    mensaje.textContent = 'Ocurrió un error. Intentá de nuevo.';
    console.error('Error:', error);
  })
  .finally(() => {
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar inscripción';
  });
});




