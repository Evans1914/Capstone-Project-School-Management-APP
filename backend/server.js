// server.js
const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');
//const studentRoutes = require('./routes/teacherRoutes');
const connectDB = require("./db")
// Middleware
app.use(express.json()); // To parse JSON data

// Use routes
app.use('/students', studentRoutes); // This will map the routes to /students

// Listen on port
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
