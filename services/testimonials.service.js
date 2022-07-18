//const { Testimonial } = require('./models');

const findTestimonial = async (id) => {
  const testimonialToUpdate = await Testimonial.findOne({ where: { id: id } });
  return testimonialToUpdate;
};

const updateTestimonial = async (testimonialInstance, newValues) => {
  const updatedTestimonial = await testimonialInstance.update(newValues);
  return updatedTestimonial;
};

module.exports = {
  findTestimonial,
  updateTestimonial,
};
