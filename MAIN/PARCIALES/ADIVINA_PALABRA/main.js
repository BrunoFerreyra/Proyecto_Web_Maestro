//import {ingreso} from "ingreso.js";


//  VARIABLES GLOBALES

const formUsuario = document.getElementById("formUsuario");
const presentacion = document.getElementById("presentacion"); //ARTICULO 1
const saludo = document.getElementById("saludo"); // ARTICULO 2
const juego = document.getElementById("juego"); // ARTICULO 3
const contenedorLetras = document.getElementById("contenedorLetras");
//borrar? const nombreSpan = document.getElementById("nombre");
comenzarJuego = document.getElementById("comenzarJuego");
cantidadLetras = document.getElementById("cantidadLetras");

// Tarjeta 1 => 2
function ingreso(){

    //primer click
    formUsuario.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("apreté el botón 'Ingresar'");

        const nombreUsuario = document.getElementById("nombreUsuario").value;
        if (nombreUsuario === "") return;

        console.log(nombreUsuario);

        // Mostrar nombre en todos los elementos con clase .nombreUsuario
        document.querySelectorAll(".nombreUsuario").forEach(span => { 
            span.textContent = nombreUsuario
        })
        // document.querySelectorAll(".nombreUsuario") busca todos los elementos con la clasee nombreUsuario
        // devuevle LISTA con todos ellos
        // ATENTI! span es el nombre de la variable, lo va a escribir en cualquier etiqueta que este class y admita escritura

        //ocultar presentacion , mostrar saludo
        presentacion.classList.add("ocultar");
        saludo.classList.remove("ocultar");
});

// tal vez ca o adentro del eventListener va lo de las cookies
}


//tarjeta 2 => 3
function comenzarJuego(){
    // segundo click
    comenzarJuego.addEventListener("click", function(){
        console.log("Empezar a jugar perri");

        const letras = cantidadLetras.value ;

        if (!letras){ 
            alert("Por favor elegi una cantidad de letras!")
        }

        //Ocultar saludo mostrar juego 
        saludo.classList.add("ocultar");
        juego.classList.remove("ocultar");

        //Limpiar casillas 
        contenedorLetras.innerText = "";

        
        informarLetras = document.getElementById("informarLetras")
        informarLetras.textContent = `Cantida de letras elegida: ${letras}`
    
   // Crear casillas // generar campos
        for (let i = 0; i < letras; i++) {
            const casilla = document.createElement("div");
            casilla.classList.add("letra");
            casilla.setAttribute("data-indice", i); // esto es clave para identificar cada letra
            // VOS LE PODES CREAR EL ATRIBUTO QUE QUIERAS A UNA ETIQUETA
            casilla.textContent= "_" ;
            console.log(i)
            contenedorLetras.appendChild(casilla);
        }

        });
}




















// EJECUCION DE FUNCIONES

ingreso();
comenzarJuego()
