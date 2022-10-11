 const express = require('express');
 const turnosRoutes = express.Router();
 const turnosController = require("../controllers/turnosController");
const validations = require("../middlewares/turnosMid");

turnosRoutes.get("/listado", turnosController.listado);

turnosRoutes.post(
  "/listado",
  validations.create,
  turnosController.turnos_create
);

turnosRoutes.get("/editar/:id", turnosController.product_editA);

turnosRoutes.get("/vistas", turnosController.vistas);

module.exports = turnosRoutes