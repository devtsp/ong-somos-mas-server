const express = require('express');
const router = express.Router();

const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

const newsController = require('../../controllers/news.controller');

router.route('/').post(verifyRoles(ROLES_LIST.Admin), newsController.postNew);

module.exports = router;
