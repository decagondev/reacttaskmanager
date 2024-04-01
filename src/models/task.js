// src/models/task.js
const db = require('../utils/database');

class Task {
  static async create(title, description, status, deadline, userId) {
    const dbInstance = await db;
    const result = await dbInstance.run(
      'INSERT INTO tasks (title, description, status, deadline, user_id) VALUES (?, ?, ?, ?, ?)',
      [title, description, status, deadline, userId]
    );
    return result.lastID;
  }

  static async getByUserId(userId) {
    const dbInstance = await db;
    const tasks = await dbInstance.all(
      'SELECT * FROM tasks WHERE user_id = ?',
      [userId]
    );
    return tasks;
  }
}

module.exports = Task;
