//const { Member } = require('./models/members.model.js'); // Falta crear el modelo del member

const addMember = ({ name, image }) => {
  // Cuando este el modelo se hace la consulta a la base de datos
  //Member.create({ name, image });
  console.log({ name, image });
};

const editMember = ({ name, image }) => {
  // Cuando este el modelo se hace la consulta a la base de datos
  //Member.create({ name, image });
  console.log({ name, image });
};

module.exports = { addMember, editMember };
