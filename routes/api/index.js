const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.route'));
router.use('/news', require('./news.route'));
router.use('/members', require('./members.route'));
router.use('/users', require('./users.route'));
router.use('/categories', require('./categories.route'));
router.use('/contacts', require('./contacts.route'));
router.use('/organization', require('./organization.route'));
router.use('/activities', require('./activities.route.js'));
router.use('/testimonials', require('./testimonials.route.js'));

module.exports = router;
