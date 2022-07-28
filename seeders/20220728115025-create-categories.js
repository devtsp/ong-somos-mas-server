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
        {
          name: 'Tutorías',
          description:
            'Es un programa destinado a jóvenes a partir del tercer año de secundaria,cuyo objetivo es garantizar su permanencia en la escuela y construir un proyecto de vida que da sentido al colegio',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
          deletedAt: null,
        },
        {
          name: 'Apoyo Escolar para el nivel Primario',
          description:
            'El espacio de apoyo escolar es el corazón del área educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
          deletedAt: null,
        },
        {
          name: 'Apoyo Escolar Nivel Secundario',
          description:
            'Del mismo modo que en primaria, este taller es el corazón del área secundaria. Se realizan talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el contraturno. A',
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
