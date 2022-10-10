const db = require("../database/models");
const path = require("path");
const { validationResult } = require("express-validator");

const turnosController = {
  listado: (req, res) => {
    db.Turno.findAll({
      order: [
        ["box", "ASC"],
        ["code", "ASC"],
      ],
    })
      .then((caja) => {
        res.render("listado", { caja });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  turnos_create: (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send( { mensajeError: errors.mapped() });
    } else {
      db.Turno.create({
        box: req.body.box,
        code: req.body.code,
      })
        .then(() => {
          res.redirect("listado");
        })
        .catch((err) => {
          res.send(err);
        });
    }
  },
  vistas: (req, res) => {
    db.Turno.findAll({
      order: [
        ["box", "ASC"],
        ["code", "ASC"],
      ],
    })
      .then((caja) => {
        res.render("turnos", { caja });
      })
      .catch((err) => {
        res.send(err);
      });
  },
}; 
  

module.exports = turnosController;
