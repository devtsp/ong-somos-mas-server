const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const generateToken = (UserInfo) => {
    return jwt.sign({UserInfo}, process.env.ACCESS_TOKEN_KEY, {expiresIn: '2h'});
};

const comparePassword = async(password, hash) => {
    return await bcrypt.compare(password, hash);
};

module.exports = {generateToken, comparePassword};