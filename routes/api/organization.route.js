const express = require('express');
const router = express.Router();
const {
  getOrganization,
  updateOrganization,
} = require('../../controllers/organization.controller');
const validateToken = require('../../middleware/validateToken');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

//@route    GET api/organization/public
//@desc     Gets a organization public data for a given organizationId
//@access   public
router.get('/public', getOrganization);

//@route    PUT api/organization
//@desc     Updates a organization data for a given organizationId
//@access   private
router.put('/', validateToken, verifyRoles(ROLES_LIST.Admin), updateOrganization);

module.exports = router;
