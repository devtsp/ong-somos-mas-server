const db = require('../models/index');

const userDelete = (req, res) => {
    
    const user = db.User.findOne({where: {id : 1}});

    console.log(req.params.id);
    console.log(user);

    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json(user).status(200);
    }).catch((err) => {
        res.json(err).status(500);
    });

};



module.exports = { userDelete };