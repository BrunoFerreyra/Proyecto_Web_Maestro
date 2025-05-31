//"Cuando se clickee el elemento con este id, activar la funcion"
document.getElementById("verificar").addEventListener("click", function(){

    //Creo variables
    let cadena, parrafo
    //Conecto con HTML 
    cadena = document.getElementById("entrada").value
    parrafo = document.getElementById("resultado")
    
    //Evaluo
    if (cadena === cadena.toUpperCase()){
        resultado.textContent = "La cadena esta en mayusculas"
    }else if (cadena === cadena.toLowerCase()){
        resultado.textContent = "La cadena esta en minusculas"
    }else{
        resultado.textContent = "La cadena combina mayusculas y minusculas"
    }

    


})