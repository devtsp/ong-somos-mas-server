const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const generateToken = (UserInfo) => {
    return jwt.sign({UserInfo}, process.env.ACCESS_TOKEN_KEY, {expiresIn: '2h'});
};


const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(8);
    return await bcrypt.hash(password, salt);
};


module.exports = {generateToken, encryptPassword};