const db = require("../database/models");
const path = require("path");

const turnosController = {
  listado: (req, res) => {
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
  turnos_create: (req, res) => {
    db.Turno.create({
      box: req.body.box,
      code: req.body.code,
    })
      .then(() => {
        res.redirect("turnos");
      })
      .catch((err) => {
        res.send(err);
      });
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
