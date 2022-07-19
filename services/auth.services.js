const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(8);
    return await bcrypt.hash(password, salt);
};



module.exports = { encryptPassword };