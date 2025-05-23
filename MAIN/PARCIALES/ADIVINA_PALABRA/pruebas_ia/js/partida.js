import { obtenerPalabraSecreta } from "./palabras.js";

export function setupPartida() {
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
