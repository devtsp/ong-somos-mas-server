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
      'Organization',
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
        {
          name: 'Yellow Card Overflow',
          image:
            'https://images.vexels.com/media/users/3/146861/isolated/preview/dcafb4e33c5514e9b53b3d929501feaf-football-yellow-card-icon-by-vexels.png',
          phone: '+543795123456',
          address: '1 Infinite Loop, Cupertino, CA 95014, US.',
          welcomeText:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
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
    await queryInterface.bulkDelete('Organization');
  },
};
