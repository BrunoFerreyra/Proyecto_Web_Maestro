
document.addEventListener("DOMContentLoaded", () => {
    const formUsuario = document.getElementById("formUsuario");
    const presentacion = document.getElementById("presentacion"); //ARTICULO 1
    const saludo = document.getElementById("saludo"); // ARTICULO 2
    
    const juego = document.getElementById("juego"); // ARTICULO 3
    const contenedorLetras = document.getElementById("contenedorLetras");

    //borrar? const nombreSpan = document.getElementById("nombre");
    comenzarJuego = document.getElementById("comenzarJuego");
    cantidadLetras = document.getElementById("cantidadLetras");

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


    //Logica del juego como tal
    let palabraSecreta = "ELEFANTE";
    let letrasAdivinadas= [];

    document.getElementById("FormLetra").addEventListener("submit", function(e){
        e.preventDefault();
        const letra = document.getElementById("letraIngresada").value.toUpperCase();
        document.getElementById("letraIngresada").value = "";

        if (!letra || letra.length !== 1) return;

        if (palabraSecreta.includes(letra)) {
            letrasAdivinadas.push(letra);
        }
    
        actualizarTablero();

    })


    function actualizarTablero() {
        const contenedor = document.getElementById("contenedorLetras");
        const casillas = contenedor.querySelectorAll(".letra");
    
        palabraSecreta.split("").forEach((letra, i) => {
            if (letrasAdivinadas.includes(letra)) {
                casillas[i].textContent = letra;
            } else {
                casillas[i].textContent = "";
            }
        });
    }
})

//funcion para generar los campos que correspondan
//function gene


// //IMPORTANTE ENTENDER ESTO: maneja desde el envio del formulario
// document.addEventListener("DOMContentLoaded", () => {
//     const formUsuario = document.getElementById("formPresentacion");
//     //Conexion con la tarjeta de presentacion
//     let presentacion = document.getElementById("presentacion");
//     let saludo = document.getElementById("saludo") ;

//     //Conexion con el boton

//     formUsuario.addEventListener("submit", (event) => {
//         event.preventDefault();
//         console.log("apreté el botón 'Ingresar'");
        
//         const nombreUsuario = (document.getElementById("nombreUsuario")).value
//         console.log(nombreUsuario)
//         presentacion.classList.add("ocultar");
//         saludo.classList.remove("ocultar");

//     });
//     console.log("hola")
// });










