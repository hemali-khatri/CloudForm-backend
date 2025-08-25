// index.js

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Initialize express app
const app = express();
const port = 3000;

// Enable CORS for frontend communication
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Tatva@123', // Replace with your MySQL password
  database: 'finalproject'
});

// Check DB connection
db.connect((err) => {
  if (err) {
    console.error('DB connection error: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// API endpoint to get all users
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
