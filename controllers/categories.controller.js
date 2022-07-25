const { validationResult } = require('express-validator');
const {
  getAllCategories,
  addCategory,
  categoryExists,
  getCategoryById,
  updateCategory,
} = require('../services/categories.service');

const getCategories = async (req, res) => {
  try {
    categories = await getAllCategories();
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

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

const putCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { name, description } = req.body;
  const category = await categoryExists({ id });
  if (!category) {
    return res.status(404).json({ errors: `Category not found or has been deleted` });
  }
  try {
    await updateCategory({ id, name, description, updatedAt: new Date() });
    const categoryUpdated = await getCategoryById({ id });
    res.status(200).json({ msg: `Category updated`, category: categoryUpdated });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoryExists({ id });

    if (!category) {
      return res.status(404).json({ errors: `Category not found or has been deleted` });
    }

    await updateCategory({ id, deletedAt: new Date() });
    const categoryDeleted = await getCategoryById({ id });

    res.status(200).json({ msg: `Category deleted`, category: categoryDeleted });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postCategory, deleteCategory, putCategory, getCategories };
