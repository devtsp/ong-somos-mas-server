const { addMember } = require('../services/members.service.js');
const { validationResult } = require('express-validator');

const postMembers = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name } = req.body;

  try {
    await addMember(name);
    res.status(200).json({ msg: 'Category created' });
  } catch (error) {
    res.status(500).send(`Server Error:${error.message}`);
  }
};

module.exports = { postMembers };
