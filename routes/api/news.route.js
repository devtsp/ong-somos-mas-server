const express = require('express');
const router = express.Router();

const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

const newsController = require('../../controllers/news.controller');

router.route('/').post(verifyRoles(ROLES_LIST.Admin), newsController.postNew);

//@route    GET /api/members
//@desc     Crea miembro, Valida que se envíe el campo name, y el mismo sea un string
//@access   Private
router.put(
  '/:id',
  verifyRoles(ROLES_LIST.Admin),
  [check('name', 'name must be string').isString()],
  [check('content', 'content must be string').isString()],
  [check('image', 'image must be string').isString()],
  [check('categoryId', 'categoryId must be integer').isInt()],
  [check('type', 'type must be string').isString()],
  newsController.putNews
);

module.exports = router;
