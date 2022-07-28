'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          name: 'Pietro',
          image: 'https://robohash.org/voluptatemmodinihil.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Therese',
          image: 'https://robohash.org/reprehenderitnesciuntaut.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Tami',
          image: 'https://robohash.org/exminimasapiente.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Brien',
          image: 'https://robohash.org/enimexaut.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Susannah',
          image: 'https://robohash.org/sintevenietat.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Adamo',
          image: 'https://robohash.org/modiveniamassumenda.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Lilla',
          image: 'https://robohash.org/autdistinctiovoluptatem.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Celene',
          image: 'https://robohash.org/beataeliberosimilique.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Slade',
          image: 'https://robohash.org/sapienterecusandaevoluptas.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Henka',
          image: 'https://robohash.org/atducimusconsequatur.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Idette',
          image: 'https://robohash.org/quibusdamquasnemo.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Tatiania',
          image: 'https://robohash.org/eterrorad.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Saw',
          image: 'https://robohash.org/eiuseosaliquid.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Rochelle',
          image: 'https://robohash.org/etquivoluptas.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Fanya',
          image: 'https://robohash.org/quaeetdoloribus.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Jean',
          image: 'https://robohash.org/consequaturrecusandaeimpedit.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Halie',
          image: 'https://robohash.org/quisquametest.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Jourdan',
          image: 'https://robohash.org/quasnonpariatur.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Davida',
          image: 'https://robohash.org/officiismaximeaccusantium.png?size=50x50&set=set1',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Fayette',
          image: 'https://robohash.org/sintvoluptasnihil.png?size=50x50&set=set1',
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
