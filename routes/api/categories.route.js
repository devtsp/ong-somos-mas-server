const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validateToken = require('../../middleware/validateToken');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

const {
  getCategories,
  postCategory,
  deleteCategory,
  putCategory,
} = require('../../controllers/categories.controller');

//@route    GET /api/categories
//@desc     Agregar una categoría nueva, valida que se envíe el campo name y que sea un string
//@access   Private
router.get('/', getCategories);

//@route    POTS /api/categories
//@desc     Agregar una categoría nueva, valida que se envíe el campo name y que sea un string
//@access   Private
router.post(
  '/',
  [validateToken, verifyRoles(ROLES_LIST.Admin)],
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
  [validateToken, verifyRoles(ROLES_LIST.Admin)],
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('name', 'Name must be string').isString(),
  ],
  putCategory
);

//@route    DELETE /api/categories
//@desc     Valida que la categoría existe y la elimina, caso contrario devuelve un error
//@access   Private
router.delete('/:id', [validateToken, verifyRoles(ROLES_LIST.Admin)], deleteCategory);

module.exports = router;
