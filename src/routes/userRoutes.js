// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Routes for users
router.post('/', UserController.createUser);
router.post('/login', UserController.loginUser);

module.exports = router;
