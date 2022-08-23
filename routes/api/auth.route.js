const express = require('express');
const { check } = require('express-validator');

const { login, register, authMe } = require('../../controllers/auth.controller');
const validateToken = require('../../middleware/validateToken');

const router = express.Router();


// @ route POST /api/auth/login
// @ desc As user i want to authenticate in the page to have access to it
// @ access Public
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

//@route  POST /api/auth/register
//@desc   As user I want to register in the sistem to be part of it
//@access Public
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

// @route GET /api/auth/me
// @desc  As user I want to obtain my data to know the information I store in the system
//  Should return authenticate user data from the token sent in the header
// @access Private
router.get('/me', validateToken, authMe);


module.exports = router;