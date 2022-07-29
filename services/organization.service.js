const { Organization } = require('../models');

const findOrganization = async () => {
  const organization = await Organization.findOne();
  return organization;
};

const updateOrganization = async (organizationInstance, newValues) => {
  const updatedOrganization = await organizationInstance.update(newValues);
  return updatedOrganization;
};

module.exports = { findOrganization, updateOrganization };
