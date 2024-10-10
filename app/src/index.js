// backend/index.js

const express = require('express');
const dbConnection = require('./config/db');
const cors = require('cors');
const Form = require('./models/Form'); // Import the Form model

// Initialize Express app
const app = express();

// Connect to MongoDB
dbConnection();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Route to handle form submissions
app.post('/submit-form', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newFormEntry = new Form({
      name,
      email,
      message,
    });

    await newFormEntry.save();
    res.json({ msg: 'Form submitted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

