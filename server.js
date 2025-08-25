const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

// Enable CORS for Angular frontend
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: '127.0.0.1',    // For local MySQL use localhost; for AWS RDS use the endpoint
  user: 'root',         // Replace with your MySQL username
  password: 'Tatva@123', // Replace with your MySQL password
  database: 'sys'    // Your MySQL database name
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

// Fetch Hero content
app.get('/api/hero', (req, res) => {
  db.query('SELECT * FROM hero_content LIMIT 1', (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Fetch About content
app.get('/api/about', (req, res) => {
  db.query('SELECT * FROM about_content LIMIT 1', (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Fetch Features content
app.get('/api/features', (req, res) => {
  db.query('SELECT * FROM features_content', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Fetch Contact content
app.get('/api/contact', (req, res) => {
  db.query('SELECT * FROM contact_content LIMIT 1', (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
