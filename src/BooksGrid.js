import React from 'react';
import Book from './Book';

const BooksGrid = ({ books, onBookMove }) => (
    <ol className="books-grid">
        {books.map(book => (
            <li key={book.id}>
                <Book book={book} onBookMove={onBookMove} />
            </li>
        ))}
    </ol>
)

export default BooksGrid;