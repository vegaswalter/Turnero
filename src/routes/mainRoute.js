/*const { Router } = require("express");
const mainController = require('../controllers/mainController.js')
const mainRoute = Router();

mainRoute.get('/', mainController.home);
mainRoute.get('/login', mainController.login);
mainRoute.get('/register', mainController.register);
mainRoute.get('/detail', mainController.detail);
mainRoute.get('/brands', mainController.brands);
mainRoute.get('/shoppingCart', mainController.shoppingCart);

module.exports = mainRoute*/

//------------------------
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/',mainController.Home);

router.get('/',mainController.Turnos);

router.get('/',mainController.ListadoTurnos);

router.get('/',mainController.login);