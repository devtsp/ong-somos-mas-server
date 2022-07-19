const db = require('../models/index.js');

const addMember = async ({ name, image }) => {
  const member = db.Member.build({ name, image });
  await member.save();
  return member;
};

const editMember = async ({ id, name, image, updatedAt }) => {
  const member = await db.Member.update({ name, image, updatedAt }, { where: { id } });
  return member;
};

const memberExists = async ({ id }) => {
  const memberExists = await db.Member.findByPk(id);
  return memberExists ? memberExists : null;
};

module.exports = { addMember, editMember, memberExists };
