'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
<<<<<<< HEAD:models/activities.js
  }
  activities.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      content: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'activities',
      timestamps: false,
    }
  );
  return activities;
};
=======
  };
  Activity.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};
>>>>>>> 7a005ec7f07c3f05671d0b99ac853e7478f358c4:models/activity.js
