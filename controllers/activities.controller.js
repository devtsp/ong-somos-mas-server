const { validationResult } = require('express-validator');
const addActivity = require('../services/activities.service.js');

const postActivities = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const { name, content } = req.body;

    try{
        await addActivity(name, content);
        res.status(200).json({ msg: 'Activity created succesfully'});
    } catch(error) {
        console.log(error.message);
        res.status(500).send(`Server error: ${error.message}`);
    }
};

module.exports = { postActivities };