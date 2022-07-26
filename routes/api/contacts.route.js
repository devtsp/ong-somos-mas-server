const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getAllContacts } = require('../../controllers/contacts.controller');

const validateToken = require('../../middleware/validateToken');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

router.get(
    "/",
    [validateToken, verifyRoles(ROLES_LIST.Admin)],
    getAllContacts
);


module.exports = router;
