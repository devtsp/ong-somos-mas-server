//const { /* Required services for organizations controller */ } = require('../services/organizations.service');

const getOrganization = async (req, res) => {
  // Here we should find if an organization with the giving id exists.
  // If it does, we return the @public fields
  // Otherwise, we should return some error explaining that instance doesn't exist
  try {
    /* This should be uncommented when the service is implemented
    
    const organization = findOrganization(id);
    if (organization == null){
      res.status(404).json({error: "There is no organization with the given id"})
    }
    const { name, image, phone, address, welcomeText } = organization.dataValues;
    return res.json({
      name, image, phone, address, welcomeText
    })
    */
    res.json({
      name: 'Mock name',
      image: 'Mock image',
      phone: 'Mock phone',
      address: 'Mock address',
      welcomeText: 'Mock welcomeText',
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { getOrganization };
