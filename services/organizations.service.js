const { Organization } = require('../models');

const findOrganization = async (id) => {
  const organization = await Organization.findOne({ where: { id: id } });
  return organization;
};

const updateOrganization = async (organizationInstance, newValues) => {
  const updatedOrganization = await organizationInstance.update(newValues);
  return updatedOrganization;
};

module.exports = { findOrganization, updateOrganization };
