// Topic: Stateless Components, Props, Passing Data, Dynamic Composition

function BookList({ books, onDelete, onToggle }) {
  return (
    <div className="book-grid">
      {books.map(book => (
        <div className={`book-card ${book.status}`} key={book._id}>
          <h3>{book.title}</h3>
          <p>✍️ {book.author}</p>
          <p>📚 {book.genre || 'No genre'}</p>
          <span className={`badge ${book.status}`}>
            {book.status === 'finished' ? '✅ Finished' : '📖 Reading'}
          </span>
          <div className="card-actions">
            <button onClick={() => onToggle(book._id, book.status)}>
              {book.status === 'finished' ? 'Mark Reading' : 'Mark Finished'}
            </button>
           <button className="delete" onClick={() => {
                 if(window.confirm('Are you sure you want to delete this book?')) {
                 onDelete(book._id)
                 }
}}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BookList;