import React from 'react';
import BooksGrid from './BooksGrid';

const Bookshelf = ({ shelf, onBookMove }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
            <BooksGrid books={shelf.books} onBookMove={onBookMove} />
        </div>
    </div>
)

export default Bookshelf;