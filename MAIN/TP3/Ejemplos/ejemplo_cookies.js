
function guardarNombre() {
    const nombre = document.getElementById("nombreInput").value;
    if (!nombre) {
        alert("Por favor, ingrese un nombre.");
        return;
    }
    document.cookie = "nombre=" + encodeURI(nombre) +"; path=/";
    alert("Nombre guardado en cookie");
}

function mostrarNombre() {
    const cookies = document.cookie.split(';');
    let nombre = "";
    for (let c of cookies) {
        let [key, value] = c.trim().split('=');
        if (key === "nombre") {
            nombre = decodeURIComponent(value);
        }
    }
    const p = document.getElementById("escribir");
    if (nombre) {
        p.innerHTML = "Hola " + nombre + ", bienvenido de nuevo!";
    } else {
        p.innerHTML = "No hay nombre guardado.";
    }
    
}

function borrarNombre() {
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    alert("Nombre eliminado");
}

function getCookie(nombre) {
    const cookies = document.cookie.split('; ');
    for (let c of cookies) {
        const [key, value] = c.split('=');
        if (key === nombre) return value;
    }
    return null;
}