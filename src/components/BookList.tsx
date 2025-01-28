import React from 'react';
import { Book } from '../models/Book';

interface BookListProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onEdit, onDelete }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Price: ${book.price.toFixed(2)}</p>
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
