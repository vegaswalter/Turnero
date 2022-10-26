const { Router } = require("express");
const express = require("express");
const routes = express.Router();
const turnosController = require("../controllers/turnosController");

// Home
routes.get("/", turnosController.vistas);

// Login
routes.use("/login", require("./login.routes"))

// Turnos
routes.use("/turnos", require("./turnos.routes"));

// API
routes.use("/api", require("./api/api.routes"));

module.exports = routes;
