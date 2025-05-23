document.addEventListener('DOMContentLoaded', () => {
    setupIngreso();   // Configura la tarjeta 1
    setupSeleccion(); // Configura la tarjeta 2
    setupPartida();   // Configura la tarjeta 3
  });


 function setupIngreso() {
    const form = document.getElementById("formUsuario");
    const saludo = document.getElementById("saludo");
    const presentacion = document.getElementById("presentacion");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombreUsuario").value.trim();
      if (!nombre) return;
  
      // Mostrar nombre en todos los spans correspondientes
      document.querySelectorAll(".nombreUsuario").forEach(el => el.textContent = nombre);
      
      // Transición tarjeta 1 -> 2
      presentacion.classList.add("ocultar");
      saludo.classList.remove("ocultar");
  
      // TODO: guardar en localStorage si querés historial
    });
  }
  



   function setupSeleccion() {
    const boton = document.getElementById("comenzarJuego");
    const saludo = document.getElementById("saludo");
    const juego = document.getElementById("juego");
    const selector = document.getElementById("cantidadLetras");
  
    boton.addEventListener("click", () => {
      const cantidad = parseInt(selector.value);
      if (!cantidad) return alert("Elegí la cantidad de letras");
  
      saludo.classList.add("ocultar");
      juego.classList.remove("ocultar");
  
      // Guardar la cantidad en un atributo para usarlo luego
      juego.dataset.cantidadLetras = cantidad;
      
      // Lanzar evento personalizado (opcional)
      document.dispatchEvent(new CustomEvent("juegoIniciado", {
        detail: { cantidad }
      }));
    });
  }
  



 function setupPartida() {
  let palabra = "";
  let letrasAdivinadas = [];

  document.addEventListener("juegoIniciado", (e) => {
    const cantidad = e.detail.cantidad;
    palabra = obtenerPalabraSecreta(cantidad);
    letrasAdivinadas = [];
    generarCasillas(palabra.length);
    document.getElementById("informarLetras").textContent = `Tiene ${cantidad} letras.`;
  });

  const form = document.getElementById("formLetra");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("letraIngresada");
    const letra = input.value.toUpperCase();
    input.value = "";

    if (letra && palabra.includes(letra)) {
      letrasAdivinadas.push(letra);
    }

    actualizarTablero(palabra, letrasAdivinadas);
  });

  function generarCasillas(cant) {
    const contenedor = document.getElementById("contenedorLetras");
    contenedor.innerHTML = "";
    for (let i = 0; i < cant; i++) {
      const div = document.createElement("div");
      div.classList.add("letra");
      div.textContent = "_";
      contenedor.appendChild(div);
    }
  }

  function actualizarTablero(palabra, letrasCorrectas) {
    const casillas = document.querySelectorAll("#contenedorLetras .letra");
    palabra.split("").forEach((letra, i) => {
      casillas[i].textContent = letrasCorrectas.includes(letra) ? letra : "_";
    });
  }
}

const palabras = {
    7: ["CEREBRO", "VIOLINA", "MARTINE"],
    8: ["ELEFANTE", "HORMIGAS", "SOLDADOS"],
    9: ["SABIDURIA", "ESCLAVITO", "CAMINANTE"],
    10: ["MARAVILLOS", "PESCADORES", "CATEDRALES"]
  };
  
  export function obtenerPalabraSecreta(cant) {
    const lista = palabras[cant] || [];
    return lista[Math.floor(Math.random() * lista.length)];
  }
  