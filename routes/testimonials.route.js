const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { postTestimonial, putTestimonial } = require('../controllers/testimonials.controller.js');

//@type POST
//@route /api/testimonials
//@desc creates a new testimonial. Checks 'name' and 'content' fields not to be empty;
//@access Private
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
  ],
  postTestimonial
);

//@type PUT
//@route /api/testimonials
//@desc updates a testimonial for a given id param.
//@access Private
router.put('/:id', putTestimonial);

module.exports = router;
