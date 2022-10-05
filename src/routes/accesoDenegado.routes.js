const express = require('express');
 const denegadoRoutes = express.Router();
 const adminController = require("../controllers/accesoDenegadoController");

adminRoutes.get("/admininstrador", accesoDenegadoController.accesoDenegado);


module.exports = accesoDenegadoRoutes;