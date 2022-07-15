const express = require('express');
const router = express.Router();

const db = require('../../models/index');

router.post('/register', (req, res) => {

    const {body} = req;
    const user = db.User.build({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        image: body.image,
        roleId: 1,
    });
    user.save();
    res.json(user);
});


module.exports = router;