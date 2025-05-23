export function setupSeleccion() {
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
  