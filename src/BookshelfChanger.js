import React from 'react';

const BookshelfChanger = ({ book, onBookMove }) => {
    const options = [
        { value: 'move', text: 'Move to...', disabled: true },
        { value: 'currentlyReading', text: 'Currently Reading' },
        { value: 'wantToRead', text: 'Want to Read' },
        { value: 'read', text: 'Read' },
        { value: 'none', text: 'None' },
    ]

    return (
        <div className="book-shelf-changer">
            <select defaultValue={book.shelf || 'none'} onChange={e => onBookMove({ book: book, toShelf: e.target.value })} >
                {options.map(op => (<option key={op.value} value={op.value} disabled={op.disabled}>{op.text}</option>))}
            </select>
        </div>
    )
}

export default BookshelfChanger;