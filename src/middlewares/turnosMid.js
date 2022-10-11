const { check } = require("express-validator");
const path = require("path");

const create = [
  check("box").notEmpty().withMessage("Seleccionar algun numero de caja"),
  check("code")
    .notEmpty()
    .withMessage("Ingresar codigo")
    .isLength({ min: 3 })
    .withMessage("El codigo tiene 3 caracteres letra-numero-numero")
    .isUppercase()
    .withMessage("Con letra mayuscula"),
];

module.exports = { create };
