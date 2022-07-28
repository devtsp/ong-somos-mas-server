const db = require('../models/index');

const userDelete = async(req, res) => {
    
    const user = await db.User.findOne({where: {id : req.params.id}});
    
    if ( user !== null) {
        await db.User.update(
            {deletedAt: new Date}, 
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(user);
    } else {
        res.status(404).json({msg: "User not found"});
    };

};



module.exports = { userDelete };