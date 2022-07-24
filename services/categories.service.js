const { Category } = require('../models/index.js');

const addCategory = async ({ name, description, createdAt, updatedAt }) => {
  const category = Category.build({ name, description, createdAt, updatedAt });
  await category.save();
  return category;
};

const categoryExists = async ({ id }) => {
  const categoryExists = await Category.findOne({ where: { id, deletedAt: null } });
  return categoryExists ? categoryExists : null;
};

const updateCategory = async (params) => {
  const category = await Category.update({ ...params }, { where: { id: params.id } });
  return category;
};

const destroyCategory = async ({ id }) => {
  await Category.destroy({ where: { id } });
};

const getCategoryById = async ({ id }) => {
  return await Category.findOne({ where: { id } });
};

module.exports = { addCategory, categoryExists, updateCategory, destroyCategory, getCategoryById };
