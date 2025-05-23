document.addEventListener("DOMContentLoaded", () => {
    const formUsuario = document.getElementById("formUsuario");
    const pantallaIngreso = document.getElementById("pantalla-ingreso");
    const pantallaSaludo = document.getElementById("pantalla-saludo");
    const pantallaJuego = document.getElementById("pantalla-juego");

    const nombreSpan = document.getElementById("nombre");
    const jugadorSpan = document.getElementById("jugador");
    const btnElegirPalabra = document.getElementById("btnElegirPalabra");

    formUsuario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombreUsuario").value.trim();

    if (nombre === "") return;

      // Mostrar saludo
    nombreSpan.textContent = nombre;
    jugadorSpan.textContent = nombre;  
    // Cambiar pantallas
    pantallaIngreso.classList.add("ocultar");
    pantallaSaludo.classList.remove("ocultar");
    });

    btnElegirPalabra.addEventListener("click", () => {
    pantallaSaludo.classList.add("ocultar");
    pantallaJuego.classList.remove("ocultar");
    });
});  