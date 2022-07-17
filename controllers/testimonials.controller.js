//const { Testimonial } = require('../models');
//const updateTestimonial = require('../services/testimonials.service');

const putTestimonial = async (req, res) => {
  const { id } = req.params;
  const testimonialToUpdate = Testimonial.findOne({ where: { id: id } });
  if (testimonial === null) {
    res.status(404).json({
      error: "There isn't any testimonial instance with the given id",
    });
  }
  //Here we should update and return the new testimonial instance
  res.status(204).json({ message: 'Succesfully updated testimonial', updatedTestimonial: {} });
};

module.exports = { updateTestimonial };
