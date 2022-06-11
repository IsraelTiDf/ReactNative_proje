'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Placar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Placar.init({
    placar: DataTypes.STRING,
    timeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Placar',
  });
  return Placar;
};