function guardarCookie(nombre, valor, dias = 1) {
  const fecha = new Date(Date.now() + dias * 86400000).toUTCString();
  document.cookie = `${nombre}=${encodeURIComponent(valor)}; expires=${fecha}; path=/`;
}

function obtenerCookie(nombre) {
  const arreglo = document.cookie.split('; ');
  const fila = arreglo.find(f => f.startsWith(nombre + '='));
  return fila ? decodeURIComponent(fila.split('=')[1]) : null;
}

function borrarCookie(nombre) {
  document.cookie= nombre + '=; Max-Age=0; path=/';
}


function iniciarSesion() {
  const nombre = document.getElementById('nombre-usuario').value.trim();
  if (nombre) {
    guardarCookie('usuario', nombre);
    location.reload();
  }
}

function cerrarSesion() {
  const nombre = obtenerCookie('usuario');
  if (nombre) {
    borrarCookie('usuario');
    borrarCookie(`visitas_${nombre}`);
    borrarCookie(`ultimo_${nombre}`);
    document.cookie.split(';').forEach(c => {
      const clave = c.split('=')[0].trim();
      if (clave.startsWith('tarea_')) borrarCookie(clave);
    });
    location.reload();
  }
}

function mostrarInicio() {
  const nombre = obtenerCookie('usuario');
  if (!nombre) return;
  document.getElementById('ingreso').classList.add('oculto');
  document.getElementById('aplicacion').classList.remove('oculto');
  const visitasClave = `visitas_${nombre}`;
  const ultimaClave = `ultimo_${nombre}`;
  const visitas = parseInt(obtenerCookie(visitasClave) || "0");
  const ultima = obtenerCookie(ultimaClave);
  const saludo = visitas === 0
    ? `Hola ${nombre}, es tu primera vez en el gestor de tareas.`
    : `Hola ${nombre}, es tu visita número ${visitas + 1}. Último ingreso: ${ultima}`;
  document.getElementById('saludo').textContent = saludo;
  guardarCookie(visitasClave, visitas + 1);
  guardarCookie(ultimaClave, new Date().toLocaleDateString());
  cargarTareas();
}

function agregarTarea() {
  const nombreTarea = document.getElementById('nombre').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  if (nombreTarea && descripcion) {
    const id = Date.now();
    guardarCookie(`tarea_${id}`, JSON.stringify({ nombre: nombreTarea, descripcion, realizada: false }));
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    cargarTareas();
  }
}

function cargarTareas() {
  const pendientes = document.getElementById('tareas');
  const hechas = document.getElementById('realizadas');
  pendientes.innerHTML = '';
  hechas.innerHTML = '';

  document.cookie.split(';').forEach(cookie => {
    const [clave, valor] = cookie.trim().split('=');
    if (clave.startsWith('tarea_')) {
      try {
        const { nombre, descripcion, realizada } = JSON.parse(decodeURIComponent(valor));
        const elemento = document.createElement('li');
        let contenido = '';
        if (!realizada) {
          contenido = 
            `<span>${nombre} - ${descripcion}</span>
            <div>
              <button onclick="marcarComoHecha('${clave}')">Marcar Hecha</button>
              <button onclick="borrarTarea('${clave}')">Quitar</button>
            </div>`;
        } else {
          contenido = 
            `<span>${nombre} - ${descripcion}</span>
            <div>
              <button onclick="borrarTarea('${clave}')">Quitar</button>
            </div>`;
        }
        elemento.innerHTML = contenido;
        (realizada ? hechas : pendientes).appendChild(elemento);
      } catch (e) {}
    }
  });
}

function editarDescripcion(clave, nuevaDescripcion) {
  if (!nuevaDescripcion.trim()) return;
  const datos = JSON.parse(obtenerCookie(clave));
  datos.descripcion = nuevaDescripcion;
  guardarCookie(clave, JSON.stringify(datos));
}

function marcarComoHecha(clave) {
  const datos = JSON.parse(obtenerCookie(clave));
  datos.realizada = true;
  guardarCookie(clave, JSON.stringify(datos));
  cargarTareas();
}

function borrarTarea(clave) {
  borrarCookie(clave);
  cargarTareas();
}

function vaciarTareas() {
  document.cookie.split(';').forEach(c => {
    const nombre = c.split('=')[0].trim();
    if (nombre.startsWith('tarea_')) borrarCookie(nombre);
  });
  cargarTareas();
}

mostrarInicio();
