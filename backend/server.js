 require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');


app.use(cors());


app.use(express.json());  // Middleware to parse JSON data
app.use('/api/auth', authRoutes); // Use auth routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

