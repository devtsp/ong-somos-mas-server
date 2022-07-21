const { validationResult } = require('express-validator');
const { addTestimonial } = require('../services/testimonials.service');

const postTestimonial = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, content, image } = req.body;

  try {
    const newTestimonial = await addTestimonial({ name, content, image });
    res
      .status(200)
      .json({ msg: `Testimonial succesfully created`, testimonial: { name, content, image } });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postTestimonial };
