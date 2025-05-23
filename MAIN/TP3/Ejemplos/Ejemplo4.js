function analizoNumero(){
    var valor,  mensaje;
    valor = prompt("Ingrese un valor Numerico: ");

    mensaje = (isNaN(valor)) ? "El valor ingresado no es numerico" : "El valor ingresado es un numero"
    alert(mensaje)
}