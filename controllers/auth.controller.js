const { validationResult } = require('express-validator');
const { default: jwtDecode } = require('jwt-decode');

const ROLES_LIST = require('../config/rolesList');
const db = require('../models/index');
const { comparePassword, generateToken, encryptPassword } = require('../services/auth.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).json({ err: err.array() });
  }

  // Verify if email already exists
  const databaseUser = await db.User.findOne({ where: { email } });

  if (databaseUser === null) {
    return res.status(404).json({ msg: "User with that email doesn't exist" });
  }

  // if email exist compare encrypted password with the req password
  const comparationResult = await comparePassword(password, databaseUser.password);

  if (comparationResult === false) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }
  // return to user if it exist and the password is valid
  const newToken = generateToken(databaseUser.dataValues);
  return res.status(200).json({
    msg: 'Logged successfully',
    token: newToken,
  });
};

const register = async (req, res) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).json({ err: err.array() });
  }

  const { body } = req;
  const userFound = await db.User.findOne({ where: { email: body.email } });

  const password = await encryptPassword(body.password);
  const userData = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: password,
    image: body.image,
    roleId: body.roleId || ROLES_LIST.User,
  };
  const newToken = generateToken(userData);

  if (userFound == null) {
    const user = db.User.build(userData);
    user
      .save()
      .then(() => {
        res.status(200).json({ user, token: newToken });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(400).json({ msg: 'User already exists with that email' });
  }
};

const authMe = (req, res) => {
  const token = req.token.split(' ')[1];
  const user = jwtDecode(token);
  res.status(200).json(user);
};

module.exports = { register, login, authMe };
