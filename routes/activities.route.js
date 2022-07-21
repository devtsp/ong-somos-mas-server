const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const verifyRoles = require('../middleware/verifyRoles');
const ROLES_LIST = require('../config/rolesList');

const { postActivities } = require('../controllers/activities.controller.js');

//@type POST
//@route /api/activities
//@desc creates new activity. Checks 'name' and 'content' fields to not be empty. 
//@access Private


router.post(
    '/',
    verifyRoles(ROLES_LIST.Admin),
    [
        check('name', 'Name is required'.not().isEmpty()),
        check('content', 'Content is required'.not().isEmpty()),
    ],
    postActivities
);

module.exports = router;