const { validationResult } = require('express-validator');
const {
  addCategory,
  categoryExists,
  getCategoryById,
  destroyCategory,
} = require('../services/categories.service');

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

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoryExists({ id });

    if (!category) {
      return res.status(404).json({ errors: `Category not found` });
    }

    const categoryDeleted = await getCategoryById({ id });
    await destroyCategory({ id });

    res.status(200).json({ msg: `Category deleted`, category: categoryDeleted });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postCategory, deleteCategory };
