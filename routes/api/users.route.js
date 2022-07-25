const express = require('express');
const router = express.Router();
const { getUsers } = require('../../controllers/users.controller');

//@route    GET /api/users
//@desc     Devuelve todos los Usuarios
//@access   Private (Admin)
router.get('/', getUsers);

module.exports = router;
