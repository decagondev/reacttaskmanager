// src/models/user.js
const db = require('../utils/database');

class User {
  static async create(username, password, roleId) {
    const dbInstance = await db;
    const result = await dbInstance.run(
      'INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)',
      [username, password, roleId]
    );
    return result.lastID;
  }

  static async findByUsername(username) {
    const dbInstance = await db;
    const user = await dbInstance.get(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    return user;
  }
}

module.exports = User;
