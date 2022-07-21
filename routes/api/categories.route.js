const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { postCategory } = require('../../controllers/categories.controller');

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

module.exports = router;
