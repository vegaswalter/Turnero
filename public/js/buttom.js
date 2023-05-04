var opciones = document.querySelectorAll("input[name='opciones']");
var labels = document.querySelectorAll(
  "label[for='opcion-1'], label[for='opcion-2'], label[for='opcion-3']"
);

opciones.forEach(function (opcion) {
  opcion.addEventListener("change", function () {
    labels.forEach(function (label) {
      if (label.getAttribute("for") === opcion.getAttribute("id")) {
        ;
      } else {
       ;
      }
    });
  });
});
