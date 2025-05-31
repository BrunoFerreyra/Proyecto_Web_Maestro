function ingresarCadena(){
    var cadena, mensaje;

    cadena = prompt("Ingrese una cadena de texto");

    if (cadena === cadena.toUpperCase()) {  // todo MAYUSCULA
        mensaje = "La cadena es todo mayusculas"
    }
    if (cadena === cadena.toLowerCase()){
        mensaje = "La cadena es todo minusculas"
    }
    else{
        mensaje = "La cadena combina mayusculas y minusculas"
    }

    alert(mensaje)
}