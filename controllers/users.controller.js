const db = require('../models/index');

const userDelete = async(req, res) => {
    
    const user = await db.User.findOne({where: {id : req.params.id}});
    
    if ( user !== null) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.json(user).status(200);
        }).catch((err) => {
            res.json(err).status(500);
        });
    } else {
        res.status(404).json({msg: "User not found"});
    };

};



module.exports = { userDelete };