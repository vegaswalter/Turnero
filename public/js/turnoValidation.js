window.addEventListener("load", () => {
  let formulario = document.querySelector("form");
  let inputCode = document.querySelector("#code");
  let ulErrores = document.querySelector("#errores");

  inputCode.focus();

  let arrayInput = [inputCode];

  formulario.addEventListener("submit", function (e) {
    let errores = 0;
    ulErrores.innerHTML = "";
    arrayInput.forEach(function (input) {
      input.nextElementSibling.innerHTML = "";

      if (input.dataset.nombre == "code" && input.value.length > 3) {
        input.classList.add("is-invalid");
        errores++;
        ulErrores.innerHTML += (
          <li>El codigo no puede tener mas de 3 caracteres</li>
        );
        input.nextElementSibling.innerHTML =
          "El largo del nombre no puede ser tan largo";
      }

      if (input.dataset.nombre == "code" && input.value.length < 2) {
        input.classList.add("is-invalid");
        errores++;
        ulErrores.innerHTML += (
          <li>El codigo no puede tener menos de 3 caracteres</li>
        );
        input.nextElementSibling.innerHTML =
          "El largo del codigo no puede ser tan corto";
      }

      if (errores > 0) {
        e.preventDefault();
      }
    });
  });
});
