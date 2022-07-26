const { getAllContacts } = require('../services/contacts.service');


const getAllContacts = async(req, res) => {

    try {
        const contacts = await getAllContacts();
        res.status(200).json(contacts);
        
    } catch (error) {
        res.status(500).json({ errors: error.message });        
    }

}

module.exports = {
    getAllContacts
}
