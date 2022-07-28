const { validationResult } = require('express-validator');
const { getAllContactsService, postContactService } = require('../services/contacts.service');

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
    const contacts = await getContacts();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }

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

module.exports = { getAllContacts, postContactController };
