const { Contact } = require('../models/index.js');

const getAllContactsService = async () => {
  const contacts = await Contact.findAll({ where: { deletedAt: null } });
  return contacts;
};

const postContactService = async (data) => {
  const contact = await Contact.build({ ...data });
  await contact.save();
  return contact;
};

module.exports = { getAllContactsService, postContactService };
