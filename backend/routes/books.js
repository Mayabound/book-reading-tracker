// Topic: Express REST API, Routing, HTTP Methods as Actions
// GET = Read, POST = Create, PUT = Update, DELETE = Delete

const express = require('express');
const router = express.Router();
const Book = require('../models/Books');

// READ - Get all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// CREATE - Add a new book
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

// UPDATE - Update book status
router.put('/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id, req.body, { new: true }
  );
  res.json(book);
});

// DELETE - Remove a book
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
});

module.exports = router;