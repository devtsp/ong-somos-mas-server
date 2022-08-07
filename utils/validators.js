const { body } = require('express-validator');

const entryBodyValidations = [
  body('name')
    .exists()
    .withMessage('"name" field is required')
    .bail()
    .isString()
    .withMessage('"name" field must be string')
    .bail()
    .trim()
    .notEmpty()
    .withMessage('"name" field cannot be empty'),
  body('content')
    .exists()
    .withMessage('"content" field is required')
    .bail()
    .isString()
    .withMessage('"content" field must be string')
    .bail()
    .trim()
    .notEmpty()
    .withMessage('"content" field cannot be empty'),
];

module.exports = { entryBodyValidations };
