// src/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes for tasks
router.get('/', authMiddleware, TaskController.getTasksByUser);
router.post('/', authMiddleware, TaskController.createTask);

module.exports = router;
