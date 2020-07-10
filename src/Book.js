import React from 'react';
import BookshelfChanger from './BookshelfChanger';
import AuthorList from './AuthorList';

const Book = ({ book, onBookMove }) => {

    const imageUrl = book.imageLinks && book.imageLinks.thumbnail ? `url("${book.imageLinks.thumbnail}")` : "";

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundSize: 'cover', backgroundImage: imageUrl }}></div>
                <BookshelfChanger book={book} onBookMove={onBookMove} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                <AuthorList authors={book.authors} />
            </div>
        </div>
    )
}

export default Book;