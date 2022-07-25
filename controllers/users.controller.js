const { getAllUsers } = require('../services/users.service');

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { getUsers };
