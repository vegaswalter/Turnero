const express = require("express");
const turnosController = require("../../controllers/api/turnosController");
const turnoRoutes = express.Router();

// Turnos list
turnoRoutes.get("/", turnosController.list);

// Turnos id
turnoRoutes.get("/:id", turnosController.detail);

module.exports = turnoRoutes;
