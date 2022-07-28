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

  if (user !== null) {
    await db.User.update(
      { deletedAt: new Date() },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(user);
  } else {
    res.status(404).json({ msg: 'User not found' });
  }
};

module.exports = { userDelete };
