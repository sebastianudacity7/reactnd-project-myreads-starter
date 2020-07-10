import React from 'react';
import Bookshelf from './Bookshelf';

const BookshelfList = ({ shelfs, onBookMove }) => (
    <div>
        {shelfs.map(shelf => (<Bookshelf key={shelf.id} shelf={shelf} onBookMove={onBookMove} />))}
    </div>
)

export default BookshelfList;