// src/controllers/taskController.js
const Task = require('../models/task');

const getTasksByUser = async (req, res) => {
  try {
    const userId = req.user.userId; // Extracted from authentication middleware
    const tasks = await Task.getByUserId(userId);
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, status, deadline } = req.body;
    const userId = req.user.userId; // Extracted from authentication middleware
    const taskId = await Task.create(title, description, status, deadline, userId);
    res.json({ taskId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getTasksByUser, createTask };
