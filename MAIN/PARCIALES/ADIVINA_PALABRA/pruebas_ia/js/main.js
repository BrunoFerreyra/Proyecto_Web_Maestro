import { setupIngreso } from './ingreso.js';
import { setupSeleccion } from './seleccion.js';
import { setupPartida } from './partida.js';

document.addEventListener('DOMContentLoaded', () => {
  setupIngreso();   // Configura la tarjeta 1
  setupSeleccion(); // Configura la tarjeta 2
  setupPartida();   // Configura la tarjeta 3
});
