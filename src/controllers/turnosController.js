const db = require("../database/models");
const path = require("path");
const { validationResult } = require("express-validator");

const turnosController = {
  listado: (req, res) => {
    db.Turns.findAll({
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
      return res.send({ mensajeError: errors.mapped() });
    } else {
      db.Turns.create({
        box: req.body.box,
        code: req.body.code,
        condition: req.body.condition,
      })
        .then(() => {
          res.redirect("listado");
        })
        .catch((err) => {
          res.send(err);
        });
    }
  },
  turnos_editA: (req, res) => {
    db.Turns.findByPk(req.params.id)
      .then((caja) => {
        res.render("editar", { caja });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  turnos_editB: (req, res) => {
    db.Turns.update(
      {
        box: req.body.box,
        code: req.body.code,
        condition: req.body.condition,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(() => {
        res.redirect("/turnos/listado");
      })
      .catch((err) => {
        res.send(err);
      });
  },

  turnos_delete: (req, res) => {
    db.Turns.destroy({
      where: {
        id: req.params.id,
      },
      force: true,
    })
      .then(() => {
        res.redirect("/turnos/listado");
      })
      .catch((err) => {
        res.send(err);
      });
  },
  vistas: (req, res) => {
    db.Turns.findAll({
      order: [
        ["box", "DESC"],
        ["code", "DESC"],
        ["condition"],
      ]
    })
        .then((caja ) => {
          res.render("turnos", { caja } );
        })
        .catch((err) => {
          res.send(err);
        });
    
    
  },
};

module.exports = turnosController;
