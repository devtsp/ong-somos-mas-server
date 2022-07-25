const express = require('express');
const router = express.Router();
const { getUsers } = require('../../controllers/users.controller');
const validateToken = require('../../middleware/validateToken');

//@route    GET /api/users
//@desc     Devuelve todos los Usuarios
//@access   Private (Admin)
router.get('/', validateToken, getUsers);

module.exports = router;
