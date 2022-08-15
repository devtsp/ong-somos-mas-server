'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          name: 'Pietro',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Therese',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Tami',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Brien',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Susannah',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Adamo',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Lilla',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Celene',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Slade',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Henka',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Idette',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Tatiania',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Saw',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Rochelle',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Fanya',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Jean',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Halie',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Jourdan',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Davida',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Fayette',
          image: 'https://placeimg.com/400/400/people',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Members');
  },
};
