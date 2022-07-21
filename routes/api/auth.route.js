const express = require('express');
const { check } = require('express-validator');
const { login } = require('../../controllers/auth.controller');

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

module.exports = router;