 const express = require('express');
 const turnosRoutes = express.Router();
 const turnosController = require("../controllers/turnosController");

turnosRoutes.get("/listado", turnosController.listado);

//turnosRoutes.get("/vista", TurnosController.detalle);

module.exports = turnosRoutes