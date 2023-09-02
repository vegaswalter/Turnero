var ctx = document.getElementById("estadisticas").getContext("2d");

// Configura los datos para el gráfico
var data = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
  datasets: [
    {
      label: "Turnos",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Color de fondo de las barras
      borderColor: "rgba(75, 192, 192, 1)", // Color del borde de las barras
      borderWidth: 1, // Ancho del borde de las barras
    },
  ],
};

// Configura las opciones del gráfico (puedes personalizar esto según tus necesidades)
var options = {
  scales: {
    y: {
      beginAtZero: true, // Comienza el eje Y en 0
    },
  },
};

// Crea el gráfico
var myChart = new Chart(ctx, {
  type: "bar", // Tipo de gráfico (puedes cambiarlo a 'line', 'pie', etc.)
  data: data,
  options: options,
});
