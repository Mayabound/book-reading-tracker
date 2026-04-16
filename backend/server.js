// Topic: Node.js Web Server, Express Middleware,
// MongoDB Node.js Driver, Node Package Manager

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/books', require('./routes/books'));

// Start Server
app.listen(5000, () => console.log('Server running on port 5000'));