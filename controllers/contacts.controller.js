const { validationResult } = require('express-validator');
const {
  getAllContactsService,
  postContactService,
  removeContactService,
} = require('../services/contacts.service');

const getAllContacts = async (req, res) => {
  try {
    const contacts = await getAllContactsService();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

const postContactController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, message, phone } = req.body;

  try {
    const newContact = await postContactService({
      name,
      email,
      message,
      phone,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json({ msg: `Contact created`, contact: newContact });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await removeContactService(id);
    return res.json({ msg: `Contact with ID ${id} succesfully deleted` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllContacts, postContactController, deleteContact };
