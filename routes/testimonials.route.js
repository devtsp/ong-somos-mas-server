const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  postTestimonial,
  putTestimonial,
  deleteTestimonial,
  getAllTestimonials,
  getTestimonialById,
} = require('../controllers/testimonials.controller.js');
const verifyRoles = require('../middleware/verifyRoles');
const validateToken = require('../middleware/validateToken');
const ROLES_LIST = require('../config/rolesList');

const fieldValidations = [
  check('name', 'Name is required').not().isEmpty(),
  check('content', 'Content is required').not().isEmpty(),
];

//@type GET
//@route /api/testimonials
//@desc retrieves all testimonials.
//@access Public
router.get('/', getAllTestimonials);

//@type GET
//@route /api/testimonials/:id
//@desc retrieves a testimonial instance for a given id.
//@access Public
router.get('/:id', getTestimonialById);

//@type POST
//@route /api/testimonials
//@desc creates a new testimonial. Checks 'name' and 'content' fields not to be empty;
//@access Private
router.post('/', validateToken, verifyRoles(ROLES_LIST.Admin), fieldValidations, postTestimonial);

//@type PUT
//@route /api/testimonials/:id
//@desc updates a testimonial for a given id param.
//@access Private
router.put('/:id', validateToken, verifyRoles(ROLES_LIST.Admin), fieldValidations, putTestimonial);

//@type DELETE
//@route /api/testimonials/:id
//@desc deletes a testimonial for a given id.
//@access Private
router.delete('/:id', validateToken, verifyRoles(ROLES_LIST.Admin), deleteTestimonial);

module.exports = router;
