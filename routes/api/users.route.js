const express = require('express');
const router = express.Router();
const { getUsers, userDelete } = require('../../controllers/users.controller');
const validateToken = require('../../middleware/validateToken');

const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

//@route    GET /api/users
//@desc     Devuelve todos los Usuarios
//@access   Private (Admin )
router.get('/', [validateToken, verifyRoles(ROLES_LIST.Admin)], getUsers);

//@route    DELETe /users/:id
//@desc     Delete my user
//@access   Private
router.delete('/:id', validateToken, userDelete);

module.exports = router;
