const { Testimonial } = require('../models');

const addTestimonial = async (testimonialData) => {
  const newTestimonial = await Testimonial.create({ ...testimonialData });
  //Mock response:
  return newTestimonial;
};

const findTestimonial = async (id) => {
  const testimonialToUpdate = await Testimonial.findByPk(id);
  console.log('se encontró?');
  console.log(testimonialToUpdate);
  return testimonialToUpdate;
};

const updateTestimonial = async (testimonialInstance, newValues) => {
  const updatedTestimonial = await testimonialInstance.update(newValues);
  return updatedTestimonial;
};

const destroyTestimonial = async (id) => {
  await Testimonial.destroy({ where: { id } });  
};

module.exports = {
  findTestimonial,
  updateTestimonial,
  addTestimonial,
  destroyTestimonial
};
