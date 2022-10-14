

const { Router } = require("express");
const routes = require("./index.routes");
const fs = require("fs");
const userLoggedMiddle = require ("../middlewares/userLoggedMiddle")
const authMiddleware = require ("../middlewares/authMiddleware")
const userController = require ("../controllers/userController")

//login
routes.get("/login", userController.login);


routes.post("/turnos/listado", [
    check("email").isEmail().withMessage("Email invalido"),
    check ("password").isLength ({min : 8}). withMessage ("La contraseña debe poseer 8 caracteres minimo")
], userController.processLogin);

// routes.get("/check", function (req,res){
    
// })