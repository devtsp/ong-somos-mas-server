const { validationResult } = require('express-validator');

const db = require('../models/index');
const { comparePassword, generateToken } = require('../services/auth.service');

const login = async(req, res) => {
    const { email, password } = req.body;
    
    const err = validationResult(req);

    if (!err.isEmpty()){
        return res.status(400).json({err: err.array()});
    };
    
    // Verify if email already exists
    const databaseUser = await db.User.findOne({where: {email}});
    

    if (databaseUser === null) {
        return res.status(404).json({msg: "User with that email doesn't exist"});
    };

    // if email exist compare encrypted password with the req password
    const comparationResult = comparePassword(password, databaseUser.password);
    
    if ( comparationResult === false ) {
        return res.status(401).json({msg: 'Invalid credentials'});
    };
    // return to user if it exist and the password is valid
    const newToken = generateToken(databaseUser.email);
    return res.status(200).json({
        msg: 'Logged successfully',
        token: newToken
    });
};


module.exports = {login}