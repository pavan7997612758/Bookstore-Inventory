import React, { useState } from 'react';
import { Book } from '../models/Book';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import BookFilter from '../components/BookFilter';

const HomePage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [filters, setFilters] = useState({ author: '', genre: '' });

  const handleSave = (book: Book) => {
    setBooks((prevBooks) =>
      prevBooks.some((b) => b.id === book.id)
        ? prevBooks.map((b) => (b.id === book.id ? book : b))
        : [...prevBooks, book]
    );
    setEditingBook(null);
  };

  const handleDelete = (id: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) => {
    return (
      (!filters.author || book.author.toLowerCase().includes(filters.author.toLowerCase())) &&
      (!filters.genre || book.genre === filters.genre)
    );
  });

  return (
    <div>
      <h1>Bookstore Inventory</h1>
      <BookForm onSave={handleSave} editingBook={editingBook || undefined} />
      <BookFilter onFilter={(filter) => setFilters((prev) => ({ ...prev, ...filter }))} />
      <BookList books={filteredBooks} onEdit={setEditingBook} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
