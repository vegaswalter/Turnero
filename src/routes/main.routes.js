const express = require('express');
const mainRoutes = express.Router();
const mainController = require("../controllers/turnosController");

mainRoutes.get("/", mainController.vistas);

module.exports = mainRoutes