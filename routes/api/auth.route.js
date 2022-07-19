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
        check('firstName', 'First name is required').not().isEmpty(),
        check('firstName', 'First name must be a string').isString(),
        check('lastName', 'Last name is required').not().isEmpty(),
        check('lastName', 'Last name must be a string').isString(),
        check('email', 'Email is required').not().isEmpty(),
        check('email', ).isEmail(),
        check('password', 'Password is required').not().isEmpty(),
        check('password', 'Password must be at least 5 characters long').isLength({min: 5})
    ],
    register
);


module.exports = router;