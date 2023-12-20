const { body, validationResult } = require('express-validator');

// Validation rules for creating a new user
exports.userValidationRules = [
    body('username').isString().trim().notEmpty().withMessage('Username is required'),
    body('userUUID').isString().trim().notEmpty().withMessage('User UUID is required'),
    body('email').isEmail().normalizeEmail().withMessage('Invalid email format')
        .notEmpty().withMessage('Email is required')
];

