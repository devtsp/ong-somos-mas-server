const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (UserInfo) => {
    return jwt.sign({UserInfo}, process.env.ACCESS_TOKEN_KEY, {expiresIn: '2h'});
}

module.exports = generateToken;