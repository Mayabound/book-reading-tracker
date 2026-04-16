// Topic: React Components, React Forms, Event Handling,
// useState Hook, Child to Parent Communication

import { useState } from 'react';

function BookForm({ onAdd }) {
  const [form, setForm] = useState({ title: '', author: '', genre: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return;
    onAdd(form);
    setForm({ title: '', author: '', genre: '' });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input name="title"  placeholder="Book title"  value={form.title}  onChange={handleChange} />
      <input name="author" placeholder="Author name" value={form.author} onChange={handleChange} />
      <input name="genre"  placeholder="Genre"       value={form.genre}  onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}
export default BookForm;