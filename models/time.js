'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Time.belongsTo(models.User);
    }
  }
  Time.init({
    nome: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    placarId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Time',
  });
  return Time;
};