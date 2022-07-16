const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { postActivities } = require('../controllers/activities.controller.js');


router.post(
    '/',
    [
        check('name', 'Name is required'.not().isEmpty()),
        check('content', 'Content is required'.not().isEmpty()),
    ],
    postActivities
);

module.exports = router;