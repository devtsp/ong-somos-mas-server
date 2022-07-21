const { validationResult } = require('express-validator');
const db = require('../models/index');

const { encryptPassword } = require('../services/auth.service');

const register = async (req, res) => {
    const err = validationResult(req);

    if(!err.isEmpty()){
        return res.status(400).json({err: err.array()});
    };
    const {body} = req;

    const password = await encryptPassword(body.password);

    const user = db.User.build({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: password,
        image: body.image,
        roleId: 1,
    });
    user.save()
        .then(() => {
            res.json(user).status(200);
        })
        .catch((err) => {
            res.send(err).status(500);
        });
};

module.exports = {register};