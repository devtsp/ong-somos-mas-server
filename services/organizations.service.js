const { Organization } = require('../models');

const findOrganization = async (id) => {
  const organization = await Organization.findOne({ where: { id: id } });
  return organization;
};

const updateOrganization = async (organizationInstance, newValues) => {
  const updatedOrganization = await Organization.update(newValues);
  return updatedOrganization;
};

module.exports = { findOrganization };
