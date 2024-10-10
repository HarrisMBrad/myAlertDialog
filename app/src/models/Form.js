// models/Form.js

const mongoose = require('mongoose');

// Define the schema for the form
const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true, // Removes whitespace from both ends
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true, // Converts the email to lowercase
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ], // Basic email validation
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now, // Automatically sets the date to the current date
  },
});

// Create and export the Form model
module.exports = mongoose.model('Form', FormSchema);
