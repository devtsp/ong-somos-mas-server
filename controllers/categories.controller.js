const { validationResult } = require('express-validator');
const { addCategory } = require('../services/categories.service');

const postCategory = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, description } = req.body;

  try {
    const newCategory = await addCategory({
      name,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json({ msg: `Category created`, category: newCategory });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postCategory };
