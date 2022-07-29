const { default: jwtDecode } = require('jwt-decode');
const { User } = require('../models');

const getAllUsers = async () => {
  const users = await User.findAll({ where: { deletedAt: null } });
  return users;
};

const getOneUserById = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (user !== null) {
    return user.dataValues;
  } else {
    return null;
  }
};

const getUserDataFromToken = (token) => {
  const splitToken = token.split(' ')[1];
  return jwtDecode(splitToken);
};

module.exports = { getAllUsers, getOneUserById, getUserDataFromToken };
