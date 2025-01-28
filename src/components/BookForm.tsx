import React, { useState } from 'react';
import { Book } from '../models/Book';

interface BookFormProps {
  onSave: (book: Book) => void;
  editingBook?: Book;
}

const BookForm: React.FC<BookFormProps> = ({ onSave, editingBook }) => {
  const [book, setBook] = useState<Book>(
    editingBook || { id: '', title: '', author: '', genre: '', price: 0 }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: name === 'price' ? parseFloat(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...book, id: book.id || crypto.randomUUID() });
    setBook({ id: '', title: '', author: '', genre: '', price: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
      <input name="author" value={book.author} onChange={handleChange} placeholder="Author" required />
      <select name="genre" value={book.genre} onChange={handleChange} required>
        <option value="">Select Genre</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <input
        name="price"
        value={book.price || ''}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        step="0.01"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
