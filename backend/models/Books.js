// Topic: MongoDB Schema, Mongoose Model, Documents & Collections

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title:  { type: String, required: true },
  author: { type: String, required: true },
  genre:  { type: String },
  status: { type: String, default: 'reading' }
});

module.exports = mongoose.model('Book', BookSchema);