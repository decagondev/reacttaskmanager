// src/utils/database.js
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const dbPromise = open({
  filename: './db/database.sqlite',
  driver: sqlite3.Database,
});

module.exports = dbPromise;
