const { Router } = require("express");
const mainController = require('../controllers/mainController')
const mainRoute = Router();

mainRoute.get('/', mainController.home);
mainRoute.get('/login', mainController.login);
mainRoute.get('/register', mainController.register);
mainRoute.get('/detail', mainController.detail);
mainRoute.get('/brands', mainController.brands);
mainRoute.get('/shoppingCart', mainController.shoppingCart);

module.exports = mainRoute;