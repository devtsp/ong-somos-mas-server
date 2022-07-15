const { addMember } = require('../services/members.service.js');
const { validationResult } = require('express-validator');

const postMembers = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, image } = req.body;

  try {
    await addMember({ name, image });
    res.status(200).json({ msg: `Member created`, member: { name, image } });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postMembers };
