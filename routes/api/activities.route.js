const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/rolesList');

const { postActivities, putActivity, getAllActivities, deleteActivity, getActivityById } = require('../../controllers/activities.controller.js');
const validateToken = require('../../middleware/validateToken');

const fieldValidations = [
  check('name', 'Name is required').not().isEmpty(),
  check('content', 'Content is required').not().isEmpty(),
];

router.get("/", getAllActivities);

router.get("/:id", getActivityById);

//@type POST
//@route /api/activities
//@desc creates new activity. Checks 'name' and 'content' fields to not be empty.
//@access Private

router.post(
  '/',
  validateToken,
  verifyRoles(ROLES_LIST.Admin),
  fieldValidations,
  postActivities
);

//@type PUT
//@route /api/activities
//@desc updates activity for a given id. Checks 'name' and 'content' fields to not be empty.
//@access Private

router.put('/:id',
validateToken, 
 verifyRoles(ROLES_LIST.Admin),  
fieldValidations, 
putActivity
);

router.delete('/:id',
 validateToken, 
 verifyRoles(ROLES_LIST.Admin), 
 deleteActivity
 );

module.exports = router;
