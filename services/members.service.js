//const { Member } = require('./models/members.model.js'); // Falta crear el modelo del member
const User = require('./models/user.js'); // Falta crear el modelo del member

const addMember = ({ name, image }) => {
  try {
    console.log({ name, image });
    //Member.create({ name, image });
  } catch (error) {
    console.log(`Server Error: ${error.message}`);
  }
};

module.exports = { addMember };
