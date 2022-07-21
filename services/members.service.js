const db = require('../models/index.js');

const addMember = async ({ name, image }) => {
  const member = await db.Member.build({ name, image });
  await member.save();
  return member;
};

const getAllMembers = async () => {
  return await db.Member.findAll();
};

const editMember = async ({ id, name, image, updatedAt }) => {
  const member = await db.Member.update({ name, image, updatedAt }, { where: { id } });
  return member;
};

const memberExists = async ({ id }) => {
  const memberExists = await db.Member.findByPk(id);
  return memberExists ? memberExists : null;
};

const destroyMember = async ({ id }) => {
  await db.Member.destroy({ where: { id } });
};

module.exports = { addMember, editMember, memberExists, getAllMembers, destroyMember };
