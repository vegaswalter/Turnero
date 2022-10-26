const express = require("express");
const turnosRoutes = express.Router();
const turnosController = require("../controllers/turnosController");
const validations = require("../middlewares/turnosMid");


turnosRoutes.get("/listado", turnosController.listado);

turnosRoutes.post(
  "/listado",
  validations.create,
  turnosController.turnos_create
);

turnosRoutes.delete("/turnos_delete/:id", turnosController.turnos_delete);

turnosRoutes.get("/turnos_edit/:id", turnosController.turnos_editA);

turnosRoutes.put("/turnos_list/:id", turnosController.turnos_editB);

module.exports = turnosRoutes;
