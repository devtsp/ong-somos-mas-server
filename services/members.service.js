const db = require('../models/index.js');

const addMember = async ({ name, image }) => {
  // Cuando este el modelo se hace la consulta a la base de datos
  const member = db.Member.build({ name, image });
  await member.save();
  return member;
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
