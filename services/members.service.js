//const { Member } = require('./models/members.model.js'); // Falta crear el modelo del member

const addMember = ({ name, image }) => {
  // Cuando este el modelo se hace la consulta a la base de datos
  //Member.create({ name, image });
  console.log({ name, image });
};

const editMember = ({ id, name, image }) => {
  // Cuando este el modelo se hace la consulta a la base de datos
  // edita el miembro
  // Member.update({ name, image }, { where: { id } });
  console.log({ id, name, image });
};

const searchMember = ({ id }) => {
  // Cuando este el modelo se hace la consulta a la base de datos
  // Se  fija si existe el miembro por el id
  // const memberExists = await addMember.findOne({where:{id}});
  // memberExists ? memberExists : null;
  console.log({ id });
};

module.exports = { addMember, editMember, searchMember };
