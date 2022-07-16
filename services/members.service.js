//const { Member } = require('./models/members.model.js'); // Falta crear el modelo del member

const addMember = ({ name, image }) => {
  // Cuando este el modelo se hace la consulta a la base de datos
  //Member.create({ name, image });
  console.log({ name, image });
};

const editMember = ({ name, image }) => {
  // Cuando este el modelo se hace la consulta a la base de datos
  //edita el miembro

  console.log({ name, image });
};

const searchMember = ({ id }) => {
  // Cuando este el modelo se hace la consulta a la base de datos
  //se  fija si existe el miembro por el id
  console.log({ id });
};

module.exports = { addMember, editMember, searchMember };
