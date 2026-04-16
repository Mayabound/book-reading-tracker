// Topic: React State, Async State Initialization,
// useEffect, Composing Components, Reading & Writing MongoDB
import { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

const API = 'http://localhost:5000/api/books';

function App() {
  const [books, setBooks] = useState([]);

  // Fetch all books on page load
  useEffect(() => {
    fetch(API).then(r => r.json()).then(setBooks);
  }, []);

  // CREATE
  const addBook = async (form) => {
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const book = await res.json();
    setBooks([...books, book]);
  };

  // DELETE
  const deleteBook = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    setBooks(books.filter(b => b._id !== id));
  };

  // UPDATE
  const toggleStatus = async (id, status) => {
    const newStatus = status === 'finished' ? 'reading' : 'finished';
    const res = await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
    const updated = await res.json();
    setBooks(books.map(b => b._id === id ? updated : b));
  };

  const finished = books.filter(b => b.status === 'finished').length;
  const reading  = books.filter(b => b.status === 'reading').length;

  return (
    <div className="app">
      <h1>📚 Book Reading Tracker</h1>
      <div className="stats">
        <div className="stat">📖 Reading: <strong>{reading}</strong></div>
        <div className="stat">✅ Finished: <strong>{finished}</strong></div>
        <div className="stat">📦 Total: <strong>{books.length}</strong></div>
      </div>
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} onToggle={toggleStatus} />
    </div>
  );
}
export default App;