'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Turns.init({
    box: DataTypes.STRING,
    code: DataTypes.STRING,
    condition: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Turns',
  });
  return Turns;
};