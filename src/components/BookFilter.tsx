import React from 'react';

interface BookFilterProps {
  onFilter: (filter: { author: string; genre: string }) => void;
}

const BookFilter: React.FC<BookFilterProps> = ({ onFilter }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilter({ [name]: value });
  };

  return (
    <div>
      <input name="author" placeholder="Filter by author" onChange={handleChange} />
      <select name="genre" onChange={handleChange}>
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
    </div>
  );
};

export default BookFilter;
