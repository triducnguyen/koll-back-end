const express = require('express');
const router = express.Router();
const userController = require('../user/controller/userController')
const { userValidationRules } = require('./validator/userCreateValidator');


router.post('/user', userValidationRules, userController.createUser);
router.get('/user/:userUUID', userController.getUser);
// router.put('/user/:userUUID', userController.updateUser);
// router.delete('/user/:userUUID', userController.deleteUser);

module.exports = router;
