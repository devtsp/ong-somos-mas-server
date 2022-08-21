const { validationResult } = require('express-validator');
const { default: jwtDecode } = require('jwt-decode');

const ROLES_LIST = require('../config/rolesList');
const db = require('../models/index');
const { comparePassword, generateToken, encryptPassword } = require('../services/auth.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).json({ err: err.array() });
  }

  // Verify if email already exists
  const databaseUser = await db.User.findOne({ where: { email } });

  if (!databaseUser) {
    return res.status(404).json({ msg: "User with that email doesn't exist" });
  }

  // if email exist compare encrypted password with the req password
  const comparationResult = await comparePassword(password, databaseUser.password);

  if (comparationResult === false) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }
  // return to user if it exist and the password is valid
  const newToken = generateToken(databaseUser.dataValues);
  if (databaseUser.deletedAt == null) {
    return res.status(200).json({
      msg: 'Logged successfully',
      user: databaseUser,
      token: newToken,
    });
  } else {
    res.status(400).json({ msg: "User doesn't exists" });
  }
};

const register = async (req, res) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).json({ err: err.array() });
  }

  const { body } = req;
  const userFound = await db.User.findOne({ where: { email: body.email } });

  if (userFound) {
    return res.status(400).json({ msg: 'User already exists with that email' });
  }

  const password = await encryptPassword(body.password);

  const userData = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: password,
    image: body.image,
    roleId: body.roleId || ROLES_LIST.User,
  };

  try {
    const newUser = await db.User.create(userData);
    const token = generateToken(newUser);
    return res.json({ user: newUser, token });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const authMe = (req, res) => {
  const token = req.token.split(' ')[1];
  const { UserInfo } = jwtDecode(token);
  res.status(200).json({ user: UserInfo });
};

module.exports = { register, login, authMe };
