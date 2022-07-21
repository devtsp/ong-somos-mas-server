const express = require('express');
const { check } = require('express-validator');
const { login, register } = require('../../controllers/auth.controller');

const router = express.Router();


// @ route POST /api/login
// @ desc As user i want to authenticate in the page to have access to it
router.post(
    '/login',
    [
        check('email', 'Email is required').not().isEmpty(),
        check('email', 'Email recieved is not an email').isEmail(),
        check('password', 'Password is required').not().isEmpty(),
        check('password', 'Password must be at least 5 characters long').isLength({min: 5})
    ],
    login
);

//@route  POST /api/register
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