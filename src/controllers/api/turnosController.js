const db = require("../../database/models")

const Turno = db.turnos


const turnosController = {
    list: async (req, res) => {
        let turnos = await Turno.findAll({
            attributes: [
                "id",
                "code",
                "box"
            ]
        })
        res.status(200).res.send(turnos)
    }
};

module.exports = turnosController;