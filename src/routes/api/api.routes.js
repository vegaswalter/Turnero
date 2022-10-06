const express = require("express");
const routes = express.Router();

//Routes

//API Turnos
routes.use("/turnos", require("./turnos.routes"));

//API Users
routes.use("/users", require("./users.routes"));

module.exports = routes;