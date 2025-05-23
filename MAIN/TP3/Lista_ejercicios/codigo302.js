// Al clickerar boton evaluar, correr funcion:
document.getElementById("evaluar").addEventListener("click", function(){

    //creo variables :
    let numero, resultado
    numero = parseInt(document.getElementById("numero").value);
    resultado = document.getElementById("resultado");
    //Limpio la lista para reutilizarla
    resultado.innerHTML = "";

    //invoco funciones
    esPar(numero,resultado);
    divisible235(numero,resultado);
    esPrimo(numero,resultado)
})

function esPar(numero,resultado){
    // si bien funciona parrafo como variable global, no es la mejor practica
    //mejores soluciones seria traerlo como parametro o realizar aca adentro el:
    //parrafo = document.getElementById("resultado");
    
    const li = document.createElement("li");
    li.textContent = (numero % 2 === 0) ? "El numero es par!" :"El numero es impar!~"
    resultado.appendChild(li);
}
function divisible235(numero,resultado){
    const divisores = [2,3,5]
    const divisibles = [];
    //recorro lista de divisores para ir evaluando el numero
    for (let i=0 ; i< divisores.length ; i++ ){
        //voy evaluando el numero, y si son divisibles por n, agrego n a la lista
        if (numero % divisores[i] === 0){
            divisibles.push(divisores[i])
        }
    }
    const li = document.createElement("li");
    if (divisibles.length === 0 ){
        li.textContent = "El numero NO es divisible ni por 2 ni 3 ni 5"
    }else{
        li.textContent = "El numero es divisible por: " + divisibles.join(", ")
    }
    resultado.appendChild(li);
}
function esPrimo(numero,resultado){
    const li = document.createElement("li");
    // EFICIENCIA: se chequea desde 2 hasta la raiz cuad del numero, matematicamente no va a haber uno despues
    for (let i=2 ; i<=Math.sqrt(numero); i++){

        if (numero % i === 0) {
            li.textContent = "El numero no es primo! :(";
            resultado.appendChild(li);
            return; // salimos de la funcion 
        }
    }
    li.textContent = "El numero es primo! :D";
    resultado.appendChild(li);
    

    resultado.appendChild(li);
}