'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'admin',
          lastName: 'admin',
          email: 'admin@gmail.com',
          // password: 123123
          password: '$2b$08$edImo07hmZZo2lKKeSP9suHAjF0wBbNFVSniX3o68WA84.fPt65pi',
          roleId: 1,
          image: 'https://placeimg.com/400/400/people',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'user',
          lastName: 'user',
          email: 'user@gmail.com',
          // password: 123123
          password: '$2b$08$UGgRmLJ65ZOazp.RSYuke.BPVLJ.EkcGX7y2l1WKoLfiDE38BBc5a',
          roleId: 2,
          image: 'https://placeimg.com/400/400/people',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users');
  },
};
