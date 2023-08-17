const claveAPI = "c3f3a4ab820e63555dcda3351f1f214c";
const ciudad = "Buenos Aires,AR";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${claveAPI}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const temperaturaActual = data.main.temp;
    const elementoTemperatura = document.getElementById("temperatura");
    elementoTemperatura.textContent = `${temperaturaActual}°`;
  })
  .catch((error) => console.error(error));

const fechaActual = new Date();

const dia = fechaActual.getDate();
const nombresSemana = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];
const semana = nombresSemana[fechaActual.getDay()];
const nombresMeses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
const mes = nombresMeses[fechaActual.getMonth()];
const anio = fechaActual.getFullYear();

const elementoFecha = document.getElementById("fecha");
elementoFecha.textContent = `${semana}. ${dia} de ${mes} ${anio}`;

function mostrarHora() {
  var fecha = new Date();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  minutos = (minutos < 10 ? "0" : "") + minutos;
  hora = (hora < 10 ? "0" : "") + hora;
  var horaActual = hora + ":" + minutos;
  document.getElementById("reloj").innerHTML = horaActual;
  setTimeout(mostrarHora, 1000);
}

// Inicia la función para mostrar la hora
mostrarHora();
