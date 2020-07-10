import React from 'react';
import BookshelfList from './BookshelfList';
import { Link } from 'react-router-dom';

const MyReads = ({ shelfs, onBookMove }) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div>
            <BookshelfList shelfs={shelfs} onBookMove={onBookMove} />
        </div>
        <div >
            <Link to='/search' className="open-search">Add a book</Link>
        </div>
    </div>
)

export default MyReads;