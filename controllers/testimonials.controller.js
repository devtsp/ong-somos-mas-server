const { validationResult } = require('express-validator');
const {
  addTestimonial,
  findTestimonial,
  updateTestimonial,
  destroyTestimonial,
  findTestimonialsAll,
} = require('../services/testimonials.service');

const getAllTestimonials = async(req, res) => {

  try {
    const testimonials = await findTestimonialsAll();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

const getTestimonialById = async (req, res) => {
  const {id} = req.params;
  try {
    const testimonial = await findTestimonial(id);
    if(!testimonial){
      return res.status(404).json({errors: `Testimonial with id ${id} not found`})
    }
    res.status(200).json(testimonial); 
    
  } catch (error) {
    res.status(500).json({ errors: error.message });  
  }
};

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

const deleteTestimonial = async (req, res) => {
  const { id } = req.params;

  try {
    const testimonial = await findTestimonial(id);

    if (!testimonial) {
      return res.status(404).json({ errors: `Testimonial not found` });
    }
    await destroyTestimonial(id);
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postTestimonial, putTestimonial, deleteTestimonial, getAllTestimonials, getTestimonialById };
