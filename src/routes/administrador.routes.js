const express = require('express');
 const adminRoutes = express.Router();
 const AccesoDenegadoController = require("../controllers/adminController");

adminRoutes.get("/admininstrador", adminController.administrador);


module.exports = administradorRoutes;