# Rutina CRC 2026

App web simple para consultar la rutina de gimnasio del Plantel Superior de Rugby 2026 de Comodoro Rugby Club.

La app permite elegir un día de entrenamiento y una semana de progresión. Con esa selección muestra el resumen del día, los bloques de trabajo y la carga correspondiente a la semana elegida.

## Archivos principales

- `index.html`: estructura de la interfaz. Define el encabezado, selector de semana, pestañas de día, resumen y contenedor donde se renderiza la rutina.
- `style.css`: estilos visuales responsive para tarjetas, bloques, ejercicios, pestañas y selector.
- `script.js`: contiene los datos de la rutina y toda la lógica de renderizado.
- `RUTINA PLANTEL SUPERIOR 2026.pdf`: fuente original usada para completar los ejercicios.

## Cómo funciona `script.js`

El archivo se divide en dos partes:

1. `routineData`: objeto principal con toda la información de la rutina. Cada clave (`dia1`, `dia2`, `dia3`) representa un día.
2. Funciones de renderizado: leen `routineData`, miran qué día y semana están seleccionados, y generan el HTML visible.

Cada día dentro de `routineData` tiene esta forma:

```js
dia1: {
  title: "Día 1",
  description: "Descripción breve del día.",
  summary: [
    "Punto importante del entrenamiento."
  ],
  blocks: [
    {
      name: "Bloque 1",
      badge: "Fuerza",
      exercises: [
        {
          type: "EMI",
          name: "Sentadilla atrás",
          week: ["3 x 5", "4 x 5", "5-5-4-4", "3 x 4"]
        }
      ]
    }
  ]
}
```

Los ejercicios pueden usar:

- `week`: array con 4 valores, uno por cada semana.
- `detail`: texto fijo cuando el ejercicio no cambia por semana o necesita una aclaración.
- `type`: categoría corta que se muestra arriba del nombre.
- `name`: nombre del ejercicio.

La función `getWeekValue(exercise, weekNumber)` decide qué mostrar:

- si el ejercicio tiene `week`, toma el valor de la semana seleccionada;
- si no tiene `week`, muestra `detail`;
- si falta el dato, muestra `-`.

`renderDay(dayKey)` es la función central. Actualiza el título, descripción, chip de semana, resumen y bloques del día activo.

## Cómo agregar ejercicios

Para agregar un ejercicio nuevo, editá `routineData` en `script.js` dentro del día y bloque correspondiente.

Ejemplo para un ejercicio con progresión semanal:

```js
{ type: "AUX", name: "Nuevo ejercicio", week: ["3 x 8", "4 x 8", "4 x 10", "3 x 12"] }
```

Ejemplo para un ejercicio fijo de activación:

```js
{ type: "Movilidad", name: "Nuevo ejercicio de movilidad", detail: "x 5 c/l" }
```

## Cambios realizados

- Se completaron ejercicios de activación faltantes tomando como base el PDF original.
- Se ajustaron nombres para que coincidan mejor con la rutina real del PDF.
- Se agregó este README como guía del proyecto.

## Mejoras sugeridas

- Separar `routineData` en un archivo `data.js` para que sea más fácil modificar ejercicios sin tocar la lógica.
- Agregar buscador por nombre de ejercicio o tipo (`EMI`, `TMS`, `AUX`, etc.).
- Agregar un botón para marcar ejercicios completados durante la sesión.
- Guardar día, semana y ejercicios completados en `localStorage`.
- Sumar notas por ejercicio para registrar pesos usados o sensaciones.
- Agregar una vista imprimible o exportable para llevar al gimnasio.
