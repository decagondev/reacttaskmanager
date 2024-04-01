// src/utils/migration.js
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

async function migrateDatabase() {
  try {
    // Open the database
    const db = await open({
      filename: './db/database.sqlite',
      driver: sqlite3.Database,
    });

    // Create the users table
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        role_id INTEGER NOT NULL,
        FOREIGN KEY (role_id) REFERENCES roles(id)
      )
    `);

    // Create the tasks table
    await db.exec(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        status TEXT,
        deadline TEXT,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    console.log('Database migration completed successfully');

    // Close the database connection
    await db.close();
  } catch (error) {
    console.error('Database migration failed:', error);
  }
}

migrateDatabase();
