const userService = require('../service/userService')
const { validationResult } = require('express-validator');

exports.createUser = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newUser = await userService.addUser(req.body);
        res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
        if (error.message === 'A user with this email already exists.') {
            return res.status(409).json({ message: error.message }); // 409 Conflict
        }
        res.status(500).json({ message: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const userUUID = req.params.userUUID;
        const userData = await userService.getUserByUUID(userUUID);
        res.status(200).json(userData);
    } catch (error) {
        if (error.message === 'User not found.') {
            return res.status(404).json({ message: error.message }); // 404 Not Found
        }
        res.status(500).json({ message: error.message });
    }
};
// Similarly implement updateUser and deleteUser
