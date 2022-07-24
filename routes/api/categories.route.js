const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const {
  postCategory,
  deleteCategory,
  putCategory,
} = require('../../controllers/categories.controller');

//@route    POTS /api/categories
//@desc     Agregar una categoría nueva, valida que se envíe el campo name y que sea un string
//@access   Private
router.post(
  '/',
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('name', 'Name must be string').isString(),
  ],
  postCategory
);

//@route    PUT /api/categories
//@desc     Valida que la categoría existe y la actualiza, caso contrario devuelve un error
//@access   Private
router.put(
  '/:id',
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('name', 'Name must be string').isString(),
  ],
  putCategory
);

//@route    POTS /api/categories
//@desc     Valida que la categoría existe y la elimina, caso contrario devuelve un error
//@access   Private
router.delete('/:id', deleteCategory);

module.exports = router;
