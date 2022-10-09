const db = require("../../database/models")

const userController = {
    list: async (req, res) => {
      try {
        const user = await db.User.findAll({
          order: [
            ["name", "ASC"],
            ["email", "ASC"],
            
          ],
        });
        const respuesta = {
          meta: {
            status: 200,
            total: user.length,
            url: "api/user",
          },
          data: user,
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
        const user = await db.User.findByPk(req.params.id);
        const respuesta = {
          meta: {
            status: 200,
            url: "api/user/:id",
          },
          data: user,
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

  module.exports = userController