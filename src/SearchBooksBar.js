import React from 'react';
import { Link } from 'react-router-dom';

const SearchBooksBar = ({ query, onQueryChanged, showMyBooks, onShowMyBooksChanged }) => (
    <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={e => onQueryChanged(e.target.value)} />
        </div>
        <div>
            <label>
                <input type="checkbox" checked={showMyBooks} onChange={e => onShowMyBooksChanged(e.target.checked)}></input>
                show my books
            </label>
        </div>
    </div>
)

export default SearchBooksBar;