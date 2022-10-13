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
      if (input.value.length == 0 || input.value == " ") {
        input.classList.add("is-invalid");
        errores++;
        ulErrores.innerHTML += `<li>El campo ${input.dataset.nombre} no puede estar vacío</li>`;
        input.nextElementSibling.innerHTML = "El campo no puede estar vacío";
        return;
      }

      if (input.value != "") {
        input.classList.remove("is-invalid");
        input.nextElementSibling.innerHTML = "";
      }

      if (input.dataset.nombre == "code" && input.value.length > 3) {
        input.classList.add("is-invalid");
        errores++;
        ulErrores.innerHTML += `<li>El codigo no puede ser mas de 3 caracteres</li>`;
       
      }

      if (input.dataset.nombre == "code" && input.value.length < 3) {
        input.classList.add("is-invalid");
        errores++;
        ulErrores.innerHTML += `<li>El codigo no puede ser menos de 3 caracteres</li>`;
      }

      if (errores > 0) {
        e.preventDefault();
        ulErrores.classList.add("alert-warning");
      }
    });

 

  
  });
})
