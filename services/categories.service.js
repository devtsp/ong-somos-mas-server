const { Category } = require('../models/index.js');

const addCategory = async ({ name, description, createdAt, updatedAt }) => {
  const category = Category.build({ name, description, createdAt, updatedAt });
  await category.save();
  return category;
};

const categoryExists = async ({ id }) => {
  const categoryExists = await Category.findByPk(id);
  return categoryExists ? categoryExists : null;
};

const destroyCategory = async ({ id }) => {
  await Category.destroy({ where: { id } });
};

const getCategoryById = async ({ id }) => {
  return await Category.findOne({ where: { id } });
};

module.exports = { addCategory, categoryExists, destroyCategory, getCategoryById };
