const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { postMembers, putMember } = require('../controllers/members.controller.js');

//@route    GET /api/members
//@desc     Crea miembro, Valida que se envíe el campo name, y el mismo sea un string
//@access   Private
router.post(
  '/',
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('name', 'Name must be string').isString(),
  ],
  postMembers
);

//@route    PUT /api/members
//@desc     Actualiza miembro, valida que el miembro existe y lo actualiza
//@access   Private
router.put(
  '/:id',
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('name', 'Name must be string').isString(),
  ],
  putMember
);

module.exports = router;
