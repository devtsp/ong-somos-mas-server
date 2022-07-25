const { validationResult } = require('express-validator');
const {
  addTestimonial,
  findTestimonial,
  updateTestimonial,
} = require('../services/testimonials.service');

const postTestimonial = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, content, image } = req.body;

  try {
    const newTestimonial = await addTestimonial({ name, content, image });
    res.status(200).json({ msg: `Testimonial succesfully created`, testimonial: newTestimonial });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

const putTestimonial = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;

  const testimonialToUpdate = await findTestimonial(id);
  if (testimonialToUpdate === null) {
    return res.status(404).json({ error: 'There is no testimonial with the given id' });
  }

  const { name, content, image } = req.body;

  try {
    const updatedTestimonial = await updateTestimonial(testimonialToUpdate, { name, content });
    res.status(200).json({ msg: `Testimonial succesfully updated`, updatedTestimonial });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postTestimonial, putTestimonial };
