'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Organizations',
      [
        {
          name: 'Somos Más',
          image:
            'https://res.cloudinary.com/dubq4tkq3/image/upload/v1659042493/LOGO-SOMOS_MAS_iwpdpc.png',
          phone: '+1160112988',
          address: 'Avenida Vélez Sársfield 264 - Córdoba',
          welcomeText: `Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando
procesos de crecimiento y de inserción social. Uniendo las manos de
todas las familias, las que viven en el barrio y las que viven fuera de
él, es que podemos pensar, crear y garantizar estos procesos. Somos
una asociación civil sin fines de lucro que se creó en 1997 con la
intención de dar alimento a las familias del barrio. Con el tiempo
fuimos involucrándonos con la comunidad y agrandando y mejorando
nuestra capacidad de trabajo. Hoy somos un centro comunitario que
acompaña a más de 700 personas a través de las áreas de:
Educación, deportes, primera infancia, salud, alimentación y trabajo
social.`,
          instagram: 'https://www.instagram.com/SomosMás',
          facebook: 'https://www.facebook.com/Somos_Más',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Organizations');
  },
};
