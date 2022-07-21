'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('activities', [{
      name: 'Programas Educativos',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'Mediante nuestros programas educativos, buscamos incrementar la capacidad intelectual, moral y afectiva de las personas.',      
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: new Date
    },
    {
      name: 'Apoyo Escolar para el nivel Primario',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'El espacio de apoyo escolar es el corazón del area educativa.',   
      createdAt: new Date,
      updatedAt: new Date,   
      deletedAt: new Date
    },
    {
      name: 'Apoyo Escolar para el nivel Secundaria',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'Del mismo modo que en primaria, este taller es el corazón del área secundaria.',  
      createdAt: new Date,
      updatedAt: new Date,    
      deletedAt: new Date
    },
    {
      name: 'Tutorias',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'Es un programa destinado a partir del tercer año de secundaria, cuyo objetivo es garantizar su permanencia en la escuela y construir un proyecto de vida que da sentido al colegio.',     
      createdAt: new Date,
      updatedAt: new Date, 
      deletedAt: new Date
    },
    {
      name: 'Tutorias',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'Encuentro semanal con tutores(individuales y grupales)',     
      createdAt: new Date,
      updatedAt: new Date, 
      deletedAt: new Date
    },
    {
      name: 'Actividad protecto',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'Los participantes del programa deben pensar una actividad relacionada a lo que quieren hacer una vez terminada la escuela y su tutor los acompaña en el proceso.',     
      createdAt: new Date,
      updatedAt: new Date, 
      deletedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Activities');    
  }
};
