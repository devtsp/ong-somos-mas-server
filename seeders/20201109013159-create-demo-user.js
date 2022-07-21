'use strict';

const { demoUsers } = require("../config/seedDemoUser");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', 
      demoUsers
    , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users');    
  }
};
