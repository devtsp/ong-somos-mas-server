const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const newsController = require('../../controllers/news.controller');

//@route    GET /api/news/:id
//@desc     Retrieve entry of type: "news" by id
//@access   Private (Admin)
router.get('/:id', newsController.getNewById);

//@route    GET /api/news
//@desc     Retrieve all entries of type: "news"
//@access   Private (Admin)
router.get('/', newsController.getNews);

//@route    POST /api/news
//@desc     Post entry of type: "news"
//@access   Private (Admin)
router.post('/', newsController.postNew);

//@route    PUT /api/news
//@desc     Actualizar una novedad existente
//@access   Private
router.put(
  '/:id',
  [check('name', 'name must be string').isString()],
  [check('content', 'content must be string').isString()],
  [check('image', 'image must be string').isString()],
  [check('categoryId', 'categoryId must be integer').isInt()],
  [check('type', 'type must be string').isString()],
  newsController.putNews
);

//@route    DELETE /api/news/:id
//@desc     Post entry of type: "news"
//@access   Private (Admin)
router.delete('/:id', newsController.deleteNew);

module.exports = router;
