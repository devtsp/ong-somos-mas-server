var express = require('express');

const { userDelete } = require('../controllers/users.controller');
const validateToken = require('../middleware/validateToken');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//@route    DELETe /users/:id
//@desc     Delete my user
//@access   Private
router.delete('/:id', validateToken, userDelete);


module.exports = router;
