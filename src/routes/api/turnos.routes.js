const express = require("express");
const userController = require("../../controllers/api/turnosController");
const userRoutes = express.Router();

// Turnos list
userRoutes.get("/", turnosController.list);

// Turnos id
userRoutes.get("/:id", turnosController.detail);

module.exports = userRoutes;
