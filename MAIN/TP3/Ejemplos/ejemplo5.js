function creoParrafo(){
    
    var enDiv = document.getElementById("contenedor");
    var oldParrafo = document.getElementById("parrafoNuevo")

    if (oldParrafo)
    {   padre = oldParrafo.parentNode;
        padre.removeChild(oldParrafo);
    }

    var parrafo = document.createElement("p")
    parrafo.setAttribute("id", "parrafoNuevo");
    parrafo.innerHTML = "Este parrafo se generó dinamicamente cuando se pulso el boton"
    enDiv.appendChild(parrafo)
}   