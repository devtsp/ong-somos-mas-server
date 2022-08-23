const express = require('express');
const router = express.Router();
const { getUsers, userDelete, userUpdate } = require('../../controllers/users.controller');
const validateToken = require('../../middleware/validateToken');

const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

//@route    GET /api/users
//@desc     Devuelve todos los Usuarios
//@access   Private (Admin )
router.get('/', [validateToken, verifyRoles(ROLES_LIST.Admin)], getUsers);

//@route    DELETE /api/users/:id
//@desc     Delete my user
//@access   Private
router.delete('/:id', validateToken, userDelete);

//@route    PUT /api/users/:i
//@desc     Update my user
//@access   Private
router.put('/:id', validateToken, userUpdate);

module.exports = router;
