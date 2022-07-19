const { addMember, editMember, searchMember } = require('../services/members.service.js');
const { validationResult } = require('express-validator');

const postMembers = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, image } = req.body;

  try {
    const newMember = await addMember({
      name,
      image,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json({ msg: `Member created`, member: newMember });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

const putMember = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, image } = req.body;
  const { id } = req.params;

  try {
    const member = await searchMember({ id });
    if (!member) {
      return res.status(404).json({ errors: `Member not found` });
    }
    await editMember({ id, name, image });
    res.status(200).json({ msg: `Member edited`, member: { id, name, image } });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postMembers, putMember };
