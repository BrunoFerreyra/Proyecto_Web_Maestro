const mostrar = document.getElementById('mostrarNumeros');
const botones = document.querySelectorAll('.btn[data-valor]');
const limpiar = document.getElementById('limpiar');
const igual = document.getElementById('igual');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        mostrar.value += boton.getAttribute('data-valor');
    });
});

limpiar.addEventListener('click', () => {
    mostrar.value = '';
});

igual.addEventListener('click', () => {
    try {
        mostrar.value = eval(mostrar.value);
    } catch {
        mostrar.value = 'Error';
    }
});