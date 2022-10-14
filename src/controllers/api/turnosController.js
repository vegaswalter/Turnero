const db = require("../../database/models");

const turnosController = {
  list: async (req, res) => {
    try {
      const turnos = await db.Turns.findAll({
        order: [
          ["box", "ASC"],
          ["code", "ASC"],
          ["createdAt", "ASC"],
        ],
      });
      const respuesta = {
        meta: {
          status: 200,
          total: turnos.length,
          url: "api/turnos",
        },
        data: turnos,
      };
      res.json(respuesta);
    } catch (err) {
      let errors = {
        status: 500,
        error: err,
      };
      res.json(errors);
    }
  },
  detail: async (req, res) => {
    try {
      const turnos = await db.Turns.findByPk(req.params.id);
      const respuesta = {
        meta: {
          status: 200,
          url: "api/turnos/:id",
        },
        data: turnos,
      };
      res.json(respuesta);
    } catch (err) {
      let errors = {
        status: 500,
        error: err,
      };
      res.json(errors);
    }
  },
};

module.exports = turnosController;
