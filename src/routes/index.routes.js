const { Router } = require("express");
const express = require("express");
const routes = express.Router();

// routes
// main
routes.use("/", require("./main.routes"));

// LOGIN
routes.use("/login", require("./login.routes"))

// turnos
routes.use("/turnos", require("./turnos.routes"));



//admin
//routes.use("/administrador", require("./administrador.routes"));

//routes.use("/AccesoDenegado", require("./administrador.routes"));

// API
//routes.use("/api", require("./api/api.routes"));

module.exports = routes;
