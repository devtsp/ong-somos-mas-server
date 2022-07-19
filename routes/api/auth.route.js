const express = require('express');
const { check } = require('express-validator');
const { register } = require('../../controllers/auth.controller');
const router = express.Router();


//@route  GET /api/members
//@desc  como ususario quiero registrarme en el sistema 
// para ser parte del mismo
router.post(
    '/register',
    [
        
    ],
    register
);


module.exports = router;