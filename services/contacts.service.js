const { Contact } = require('../models/index.js');

const getAllContactsService = async () => {
  const contacts = await Contact.findAll();
  return contacts;
};

const postContactService = async (data) => {
  const contact = await Contact.build({ ...data });
  await contact.save();
  return contact;
};

const removeContactService = async (id) => {
  console.log(id);
  const contact = await Contact.destroy({ where: { id } });
};

module.exports = { getAllContactsService, postContactService, removeContactService };
