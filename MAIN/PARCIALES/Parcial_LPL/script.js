function ingresarNombre() {
    const nombre = document.getElementById("nombre-input").value.trim();
    const mensaje = document.getElementById("mensaje");
    if (nombre) {
        const nombreGuardado = localStorage.getItem("nombreUsuario");
        if (nombreGuardado === nombre) {
            mensaje.innerText = `¡Bienvenido de nuevo, ${nombre}!`;
        } else {
            mensaje.innerText = `¡Hola, ${nombre}! Es tu primer ingreso.`;
        }
        localStorage.setItem("nombreUsuario", nombre);

        // Si es la primera vez que el usuario ingresa, asigna tareas iniciales
        if (!localStorage.getItem("tareas_" + nombre)) {
            const datosIniciales = {
                pendientes: ["Estudiar", "Hacer ejercicio"],
                realizadas: ["Comprar víveres"]
            };
            localStorage.setItem("tareas_" + nombre, JSON.stringify(datosIniciales));
        }

        mostrarTareasUsuario(nombre);
    } else {
        mensaje.innerText = "Por favor, ingresa tu nombre.";
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("tarea-input"); // GUARDA el nombre de la tarea
    const btnAgregar = document.getElementById("agregar-tarea");// BOTÓN para agregar la tarea
    const listaPendientes = document.getElementById("tareas");
    const listaTerminadas = document.getElementById("tareas-terminadas");

    // Función para crear un ítem de tarea pendiente con botón
    function crearTareaPendiente(texto, nombreUsuario) {
        const li = document.createElement("li");
        li.textContent = texto + "  ";

        const btn = document.createElement("button");
        btn.textContent = "Terminar";
        btn.addEventListener("click", () => {
            // Actualiza tareas en localStorage
            const tareas = cargarTareas(nombreUsuario);
            tareas.pendientes = tareas.pendientes.filter(t => t !== texto);
            tareas.realizadas.push(texto);
            guardarTareas(nombreUsuario, tareas.pendientes, tareas.realizadas);
            mostrarTareasUsuario(nombreUsuario);
        });

        li.appendChild(btn);
        return li;
    }

    // Agregar nueva tarea al hacer clic
    btnAgregar.addEventListener("click", () => {
        const texto = input.value.trim();
        if (texto !== "") {
            const nombreUsuario = localStorage.getItem("nombreUsuario");
            const tareas = cargarTareas(nombreUsuario);
            tareas.pendientes.push(texto);
            guardarTareas(nombreUsuario, tareas.pendientes, tareas.realizadas);
            mostrarTareasUsuario(nombreUsuario);
            input.value = "";
        }
    });

    // Para las tareas ya cargadas inicialmente, agregamos botón
    const tareasIniciales = listaPendientes.querySelectorAll("li");
    tareasIniciales.forEach(tarea => {
        const texto = tarea.textContent;
        tarea.textContent = texto + " ";

        const btn = document.createElement("button");
        btn.textContent = "Terminar";
        btn.addEventListener("click", () => {
            const liTerminado = document.createElement("li");
            liTerminado.textContent = texto;
            listaTerminadas.appendChild(liTerminado);
            tarea.remove();
        });

        tarea.appendChild(btn);
    });

    const datosIniciales = {
        "pendientes": ["Estudiar", "Hacer ejercicio"],
        "realizadas": ["Comprar víveres"]
    };

    function guardarTareas(nombreUsuario, pendientes, realizadas) {
        const datos = {
            pendientes: pendientes,
            realizadas: realizadas
        };
        localStorage.setItem("tareas_" + nombreUsuario, JSON.stringify(datos));
    }

    function cargarTareas(nombreUsuario) {
        const datos = localStorage.getItem("tareas_" + nombreUsuario);
        if (datos) {
            return JSON.parse(datos);
        } else {
            return { pendientes: [], realizadas: [] };
        }
    }

    function mostrarTareasUsuario(nombreUsuario) {
        const listaPendientes = document.getElementById("tareas");
        const listaTerminadas = document.getElementById("tareas-terminadas");
        listaPendientes.innerHTML = "";
        listaTerminadas.innerHTML = "";

        const tareas = cargarTareas(nombreUsuario);

        tareas.pendientes.forEach(texto => {
            const li = crearTareaPendiente(texto, nombreUsuario);
            listaPendientes.appendChild(li);
        });

        tareas.realizadas.forEach(texto => {
            const li = document.createElement("li");
            li.textContent = texto;
            listaTerminadas.appendChild(li);
        });
    }
});