const {
  findOrganization,
  updateOrganization: updateOrganizationService,
} = require('../services/organization.service');

const getOrganization = async (req, res) => {
  try {
    const organization = await findOrganization();
    if (organization == null) {
      return res.status(404).json({ error: 'There is no organization with the given id' });
    }
    const { name, image, phone, address, welcomeText, facebook, linkedin, instagram } =
      organization;
    return res.json({
      name,
      image,
      phone,
      address,
      welcomeText,
      facebook,
      linkedin,
      instagram,
    });
  } catch (error) {
    return res.status(500).json({ errors: error.message });
  }
};

const updateOrganization = async (req, res) => {
  const newValues = req.body;
  try {
    const organization = await findOrganization();
    if (organization == null) {
      res.status(404).json({ error: 'There is no organization with the given id' });
    }
    const updatedOrganization = await updateOrganizationService(organization, newValues);
    const { name, image, phone, address, welcomeText, facebook, linkedin, instagram } =
      updatedOrganization;
    return res
      .status(200)
      .json({ name, image, phone, address, welcomeText, facebook, linkedin, instagram });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { getOrganization, updateOrganization };
