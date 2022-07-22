const db = require('../models/index.js');

const addCategory = async ({ name, description, createdAt, updatedAt }) => {
  const category = db.Category.build({ name, description, createdAt, updatedAt });
  await category.save();
  return category;
};

const categoryExists = async ({ id }) => {
  const categoryExists = await db.Category.findByPk(id);
  return categoryExists ? categoryExists : null;
};

const destroyCategory = async ({ id }) => {
  await db.Category.destroy({ where: { id } });
};

module.exports = { addCategory, categoryExists, destroyCategory };
