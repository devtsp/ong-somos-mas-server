const db = require('../models/index.js');


const getContacts = async () => {
  const contacts = await db.Contact.findAll({ where: { deletedAt: null } });
  return contacts;
};



module.exports = {
  getContacts
};