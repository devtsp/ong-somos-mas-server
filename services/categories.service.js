const db = require('../models/index.js');

const addCategory = ({ name, description, createdAt,updatedAt }) => {
    const category = db.Category.build({ name, description, createdAt,updatedAt });
    await category.save();
    return category;
  
};

module.exports = { addCategory };