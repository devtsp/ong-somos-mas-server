const express = require('express');
const router = express.Router();
const { getUsers } = require('../../controllers/users.controller');
const validateToken = require('../../middleware/validateToken');

const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

//@route    GET /api/users
//@desc     Devuelve todos los Usuarios
//@access   Private (Admin)
router.get('/', [validateToken, verifyRoles(ROLES_LIST.Admin)], getUsers);

module.exports = router;
