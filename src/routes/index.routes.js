const express = require("express");
const routes = express.Router();

// routes
// main
routes.use("/home", require("./main.routes"));

// LOGIN
routes.use("/login", require("./login.routes"))
// turnos
routes.use("/turnos", require("./turnos.routes"));

// user
//routes.use("/usuario", require("./user.routes"));

// api
//routes.use("/api", require("./api/api.routes"));

module.exports = routes;
