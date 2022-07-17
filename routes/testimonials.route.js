const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
//There should be a validation of fields before trying to update the requested instance

const { updateTestimonial } = require('../controllers/testimonials.controller.js');

router.put('/:id', updateTestimonial);

module.exports = router;

// PUT /testimonials/:id
// Deberá validar que la novedad exista en base al id enviado por parámetro.
// En el caso de que no exista, deberá devolver un error, mientras que en caso contrario,
// deberá actualizarla y devolverla con los datos nuevos.
