const {
  addMember,
  editMember,
  memberExists,
  getAllMembers,
  destroyMember,
  getMemberById,
} = require('../services/members.service.js');
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

const getMembers = async (req, res) => {
  try {
    members = await getAllMembers();
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }

  res.status(200).json({ members });
};

const putMember = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, image } = req.body;
  const { id } = req.params;

  try {
    const member = await memberExists({ id });
    if (!member) {
      return res.status(404).json({ errors: `Member not found` });
    }
    const updatedMember = await editMember({ id, name, image, updatedAt: new Date() });
    res
      .status(200)
      .json({ msg: `Member edited`, member: { id, name, image, updatedAt: new Date() } });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

const deleteMember = async (req, res) => {
  const { id } = req.params;

  try {
    const member = await memberExists({ id });

    if (!member) {
      return res.status(404).json({ errors: `Member not found` });
    }
    const memberDeleted = await getMemberById({ id });
    console.log(memberDeleted);

    await destroyMember({ id });
    res.status(200).json({ msg: `Member deleted`, member: memberDeleted });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postMembers, putMember, getMembers, deleteMember };
