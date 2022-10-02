const { Router } = require('express');
const express = require('express');
let turnosController = require('../controllers/turnosController.js');

let routes = express.Router();

router.get('/:idTurnos',turnosController.detalle);

module.exports = router;