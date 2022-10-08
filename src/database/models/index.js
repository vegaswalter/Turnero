const dbConfig = require("../config/config.js");

const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    },
  }
);

sequelize.authenticate()
    .then(() => {
    console.log("connected...")
    })
    .catch(err => {
    console.log("Error"+ err)
    })

const db = {}
    
db.Sequelize = Sequelize
db.sequelize = sequelize

db.turnos = require("./Turno.js")(sequelize, DataTypes)
//db.Usuarios = require("./Usuario.js")(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
    console.log("yes re-sync done!")
})

module.exports = db