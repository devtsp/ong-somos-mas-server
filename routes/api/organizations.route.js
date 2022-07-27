const express = require('express');
const router = express.Router();
const { getOrganization } = require('../../controllers/organizations.controller');

//@route    GET api/organizations/:organizationId/public
//@desc     Gets a organization public data for a given organizationId
//@access   public
router.get('/:organizationId/public', getOrganization);

module.exports = router;
