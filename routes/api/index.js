const express = require('express');
const router = express.Router();

const validateToken = require('../../middleware/validateToken');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

router.use('/auth', require('./auth.route'));
router.use('/news', validateToken, verifyRoles(ROLES_LIST.Admin), require('./news.route'));
router.use('/members', require('./members.route'));
router.use('/categories', require('./categories.route'));
router.use('/contacts', require('./contacts.route'));
router.use('/organizations', require('./organizations.route'));

module.exports = router;
