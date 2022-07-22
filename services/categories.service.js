const db = require('../models/index.js');

const addCategory = async ({ name, description, createdAt, updatedAt }) => {
  const category = db.Category.build({ name, description, createdAt, updatedAt });
  await category.save();
  return category;
};

module.exports = { addCategory };
