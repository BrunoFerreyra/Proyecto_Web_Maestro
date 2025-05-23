export function setupIngreso() {
  const form = document.getElementById("formUsuario");
  const saludo = document.getElementById("saludo");
  const presentacion = document.getElementById("presentacion");

  if (!form || !saludo || !presentacion) {
    console.error("No se encontraron elementos necesarios para ingreso.");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombreUsuario").value.trim();
    if (!nombre) return;

    document.querySelectorAll(".nombreUsuario").forEach(el => el.textContent = nombre);

    presentacion.classList.add("ocultar");
    saludo.classList.remove("ocultar");
  });
}
