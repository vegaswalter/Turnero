const db = require("../database/models");

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
};
module.exports = turnosController;
