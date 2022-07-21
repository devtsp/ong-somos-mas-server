const db = require('../models/index.js');

<<<<<<< HEAD
const addCategory = async ({ name, description, createdAt,updatedAt }) => {
    const category = db.Category.build({ name, description, createdAt,updatedAt });
    await category.save();
    return category;
  
=======
const addCategory = async ({ name, description, createdAt, updatedAt }) => {
  const category = db.Category.build({ name, description, createdAt, updatedAt });
  await category.save();
  return category;
>>>>>>> 09a15cef99d05fcdf51169a19e85bcb79faf23b7
};

module.exports = { addCategory };
