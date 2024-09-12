const express = require('express');
const mysql = require('mysql2'); // Updated package
require('dotenv').config();
const cors = require('cors');

// Initialize express
const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Initialize the connection to the database
const dp = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Check if the database connection is successful
dp.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// POST request for sign-up
app.post('/sign_up', (req, res) => {
    const sql = "INSERT INTO " + process.env.TABLE_NAME + " (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    dp.query(sql, [values], (err, data) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: "An error occurred." });
        }
        return res.json({ message: "User registered successfully.", data });
    });
});

//LOG
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM " + process.env.TABLE_NAME + " WHERE `email` = ? AND `password` = ?";
    
    dp.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error('Error querying data:', err);
            return res.status(500).json({ message: "An error occurred." });
        }
        if (data.length > 0) {
            return res.json('Success');
        } else {
            return res.json('Failed');
        }
    });
});

// Start the server
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});
