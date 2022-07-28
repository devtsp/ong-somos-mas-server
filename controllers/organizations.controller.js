//const { /* Required services for organizations controller */ } = require('../services/organizations.service');

const getOrganizationById = async (req, res) => {
  const { organizationId } = req.params;
  try {
    const organization = await findOrganization(organizationId);
    if (organization == null) {
      res.status(404).json({ error: 'There is no organization with the given id' });
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
    res.status(500).json({ errors: error.message });
  }
};

const updateOrganizationById = async (req, res) => {
  const { organizationId } = req.params;
  const newValues = req.body;
  try {
    const organization = await findOrganization(organizationId);
    if (organization == null) {
      res.status(404).json({ error: 'There is no organization with the given id' });
    }
    const updatedOrganization = await updateOrganization(organization, newValues);
    const { name, image, phone, address, welcomeText, facebook, linkedin, instagram } =
      updatedOrganization;
    return res
      .status(200)
      .json({ name, image, phone, address, welcomeText, facebook, linkedin, instagram });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { getOrganization };
