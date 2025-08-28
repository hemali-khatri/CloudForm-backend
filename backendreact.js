// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const dbHost = process.env.DB_HOST || '127.0.0.1';  // Default to 'localhost' for local development
const dbPort = process.env.DB_PORT || 3306;         // Default to 3306 if not specified
const dbUser = process.env.DB_USER || 'root';       // Default to 'root' for local dev (can be customized)
const dbPassword = process.env.DB_PASSWORD || 'Tatva@123';   // Add a default empty password for local

// Create MySQL connection
const db = mysql.createConnection({
  host: dbHost, // '127.0.0.1',
  port: dbPort,
  user: dbUser, // 'root',
  password: dbPassword, //'Tatva@123', // Replace with your MySQL password
  database: process.env.DB_NAME || 'finalproject'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to fetch users
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';  // Assuming you have a 'users' table
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ error: 'Failed to fetch users' });
    }
    res.json(results);
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
