const express = require('express');
 const loginRoutes = express.Router();
 const loginController = require("../controllers/loginController");

loginRoutes.get("/login", loginController.login);


module.exports = loginRoutes