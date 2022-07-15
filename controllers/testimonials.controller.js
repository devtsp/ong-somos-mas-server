const db = require('../models');
const { validationResult } = require('express-validator');

const postTestimonial = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, content, image } = req.body;

  try {
    await db.Testimonial.create({ name, content, image });
    res.status(200).json({ msg: `Testimonial created`, testimonial: { name, image, content } });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postTestimonial };
