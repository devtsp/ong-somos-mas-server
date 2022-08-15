'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'News',
          description: 'This is the news category, created to test the seeders',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
          deletedAt: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories');
  },
};
