const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { postTestimonial, putTestimonial,deleteTestimonial } = require('../controllers/testimonials.controller.js');
const verifyRoles = require('../middleware/verifyRoles');
const ROLES_LIST = require('../config/rolesList');

const fieldValidations = [
  check('name', 'Name is required').not().isEmpty(),
  check('content', 'Content is required').not().isEmpty(),
];

//@type POST
//@route /api/testimonials
//@desc creates a new testimonial. Checks 'name' and 'content' fields not to be empty;
//@access Private
router.post('/', /*verifyRoles(ROLES_LIST.Admin),*/ fieldValidations, postTestimonial);

//@type PUT
//@route /api/testimonials
//@desc updates a testimonial for a given id param.
//@access Private
router.put('/:id', fieldValidations, putTestimonial);

router.delete('/:id', 
 //(ROLES_LIST.Admin),
 deleteTestimonial
);


module.exports = router;
