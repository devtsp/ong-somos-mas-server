const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { postMembers } = require('../controllers/members.controller.js');

//@route    GET /api/members
//@desc     devuelve todos los productos
//@access   Private
router.post(
  '/',
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('name', 'Name must be string').not().isString(),
  ],
  postMembers
);

module.exports = router;
