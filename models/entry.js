'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entry.belongsTo(models.Category, {as: 'Category'});
    }
  };
  Entry.init({
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    deleteAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};