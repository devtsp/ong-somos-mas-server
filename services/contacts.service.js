const db = require('../models/index.js');


const getAllContacts = async () => {
  const contacts = await db.Contact.findAll({ where: { deletedAt: null } });
  return contacts;
};



module.exports = {
    getAllContacts
};