const { default: jwtDecode } = require('jwt-decode');

const db = require('../models/index');
const { getAllUsers } = require('../services/users.service');

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

const userDelete = async (req, res) => {

  const user = await db.User.findOne({ where: { id: req.params.id } });
  const token = req.token.split(' ')[1];
  const userDataToken = jwtDecode(token);

  if (user !== null) {
    if( userDataToken.UserInfo.roleId == 1){

      try {
        await db.User.update(
          { deletedAt: new Date() },
          { where: {id: req.params.id,} }
        );
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
      };

    }else if (userDataToken.UserInfo.id == req.params.id) {

      try {
        await db.User.update(
          { deletedAt: new Date() },
          { where: {id: req.params.id,} }
        );
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
      };

    }else {
      res.status(400).json({msg: "You can't delete other users"});
    };

  } else {
    res.status(404).json({ msg: 'User not found' });
  };
};

module.exports = { userDelete, getUsers };
