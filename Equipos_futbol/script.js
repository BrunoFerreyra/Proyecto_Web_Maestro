
    function dividirEquipos() {
      const input = document.getElementById("playerList").value;
      const numEquipos = parseInt(document.getElementById("numEquipos").value);
      let jugadores = input
        .split('\n')
        .map(j => j.replace(/^\d+\.\s*/, '').trim())
        .filter(j => j !== "");

      // Mezclar aleatoriamente
      jugadores.sort(() => Math.random() - 0.5);

      // Mostrar advertencia si no son divisibles en partes iguales
      const warning = document.getElementById("warningMsg");
      if (jugadores.length % numEquipos !== 0) {
        warning.textContent = `⚠️ No se puede dividir en ${numEquipos} equipos exactamente iguales.`;
      } else {
        warning.textContent = "";
      }

      // Crear los equipos
      const equipos = Array.from({ length: numEquipos }, () => []);
      jugadores.forEach((jugador, i) => {
        equipos[i % numEquipos].push(jugador);
      });

      // Mostrar los equipos
      const container = document.getElementById("teamsContainer");
      container.innerHTML = "";
      equipos.forEach((equipo, index) => {
        const div = document.createElement("div");
        div.className = "team";
        div.innerHTML = `<h3>Equipo ${index + 1}</h3><ul>${equipo.map(j => `<li>${j}</li>`).join('')}</ul>`;
        container.appendChild(div);
      });
    }
  