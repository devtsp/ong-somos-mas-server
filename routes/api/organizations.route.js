const express = require('express');
const router = express.Router();
const {
  getOrganizationById,
  updateOrganizationById,
} = require('../../controllers/organizations.controller');

//@route    GET api/organizations/:organizationId/public
//@desc     Gets a organization public data for a given organizationId
//@access   public
router.get('/:organizationId/public', getOrganizationById);

//@route    PUT api/organizations/:organizationId
//@desc     Updates a organization data for a given organizationId
//@access   private
router.put('/:organizationId', updateOrganizationById);

module.exports = router;
