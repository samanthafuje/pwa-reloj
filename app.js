function actualizarHoraYFecha() {
  const ahora = new Date();

  // Hora
  const hora = ahora.toLocaleTimeString();

  // Fecha larga en español
  const opcionesFecha = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const fecha = ahora.toLocaleDateString("es-ES", opcionesFecha);

  document.getElementById("reloj").textContent = hora;
  document.getElementById("fecha").textContent = fecha;
}

setInterval(actualizarHoraYFecha, 1000);
actualizarHoraYFecha();