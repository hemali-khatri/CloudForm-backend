// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT || 3306;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// Create MySQL connection
const db = mysql.createConnection({
  host: dbHost, // '127.0.0.1',
  user: dbUser, // 'root',
  password: dbPassword, //'Tatva@123', // Replace with your MySQL password
  database: 'finalproject'
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
