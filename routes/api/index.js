const express = require('express');
const router = express.Router();

router.use('/news', require('./news.route'));
router.use('/members', require('./members.route'));

module.exports = router;
