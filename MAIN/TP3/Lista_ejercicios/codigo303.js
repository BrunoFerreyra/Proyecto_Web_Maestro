// 1. Obtener elementos
let calcular = document.getElementById("calcular");
let resultado = document.getElementById("resultado");
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let items = document.getElementById("lista_items")



//2. Conectar Boton - Evento

calcular.addEventListener("click", CalcularLetraDni)

function CalcularLetraDni (){
    // 1. Obtener elementos al hacer click
    let inputDNI = parseInt(document.getElementById("inputDNI").value);
    let inputLetra = document.getElementById("inputLetra").value;

    //2. Eliminar lo que esta escrito previamente
    resultado.innerHTML = "";  // limpia antes
    
    //3.
    if (!validarDNI(inputDNI)){
        resultado.textContent = " DNI invalido man, tiene que ser mayor a 10000000 y menor a 99999999";
        return
    }
    agregar_item("El dni se ingreso correctamente")
    //4. Crear e Insertar nuevo elemento
    const p = document.createElement("p");
    p.textContent = inputDNI;
    resultado.appendChild(p);

    //5. Mostrar el caracter que corresponda al dni
    let restoDivEntera = inputDNI % 23;
    // Buscar en la lista la posicion
    let caracter = letras[restoDivEntera]
    //for ( let i=0 ; i = restoDivEntera  ; i++ )
    agregar_item(caracter)
    console.log(restoDivEntera)
    
    if (inputLetra.toUpperCase() === caracter) {
        agregar_item("El caracter ingresado es correcto, a tu DNI le corresponde la letra " + caracter)
    }else{
        agregar_item("INCORRECTO. Ingresaste el caracter " + inputLetra + "y te correspondia el caracter" + caracter)
    }

}
function validarDNI(dni){
    return (dni > 10000000 && dni < 99999999) 
}
function agregar_item(mensaje){
    //2. Eliminar lo que esta escrito previamente
    items.innerHTML = "";  // limpia antes
    const li = document.createElement("li");
    li.textContent = mensaje;
    items.appendChild(li)
}