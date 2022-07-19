const { Testimonial } = require('../models');

const addTestimonial = async (testimonialData) => {
  const newTestimonial = await Testimonial.create(testimonialData);
  console.log(newTestimonial);
  //Mock response:
  return newTestimonial;
};

module.exports = { addTestimonial };
