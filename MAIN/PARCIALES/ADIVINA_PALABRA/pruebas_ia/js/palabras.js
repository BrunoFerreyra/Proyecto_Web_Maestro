const palabras = {
    7: ["CEREBRO", "VIOLINA", "MARTINA"],
    8: ["ELEFANTE", "HORMIGAS", "SOLDADOS"],
    9: ["SABIDURIA", "ESCLAVITO", "CAMINANTE"],
    10: ["MACARRONES", "PESCADORES", "CATEDRALES"]
  };
  
  export function obtenerPalabraSecreta(cant) {
    const lista = palabras[cant] || [];
    return lista[Math.floor(Math.random() * lista.length)];
  }
  