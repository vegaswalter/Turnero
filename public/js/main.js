const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


const claveAPI = "c3f3a4ab820e63555dcda3351f1f214c";
const ciudad = "Buenos Aires,AR";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${claveAPI}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const temperaturaActual = data.main.temp;
          const elementoTemperatura = document.getElementById("temperatura");
          elementoTemperatura.textContent = `${temperaturaActual}°C`;
        })
    .catch((error) => console.error(error));
        
  