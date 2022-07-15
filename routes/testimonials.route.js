const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

// const { postTestimonial } = require('../controllers/testimonials.controller.js');
// Controller for testimonials

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
    //Validations using check method
  ],
  //postTestimonial
);

module.exports = router;

// POST /testimonials -
// Deberá validar la existencia de los
// campos name y content enviados, para
// almacenar el registro en la tabla testimonials.
