const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  getAllContacts,
  postContactController,
  deleteContact,
} = require('../../controllers/contacts.controller');

const validateToken = require('../../middleware/validateToken');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

router.get('/', [validateToken, verifyRoles(ROLES_LIST.Admin)], getAllContacts);

//@route    POST /api/contacts
//@desc     Post new contact
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('name', 'Name must be string').isString(),
    check('email', 'Name is Required').not().isEmpty(),
    check('email', 'Name must be a email').isEmail(),
    check('message', 'Message is Required').not().isEmpty(),
    check('message', 'Message must be string').isString(),
  ],
  postContactController
);

router.delete('/:id', [validateToken, verifyRoles(ROLES_LIST.Admin)], deleteContact);

module.exports = router;
