var express = require('express');


const { userDelete } = require('../controllers/users.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/:id', userDelete);


module.exports = router;
