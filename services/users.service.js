const { User } = require('../models');

const getAllUsers = async () => {
  const users = await User.findAll({ where: { deletedAt: null } });
  return users;
};

module.exports = { getAllUsers };
