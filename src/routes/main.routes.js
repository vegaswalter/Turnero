const express = require('express');
const mainRoutes = express.Router();
const mainController = require("../controllers/mainController");

mainRoutes.get("/", mainController.home);

module.exports = mainRoutes