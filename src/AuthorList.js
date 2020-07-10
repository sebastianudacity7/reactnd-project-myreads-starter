import React from 'react';

const AuthorList = ({ authors }) => (
    <div>{authors && authors.map(a => <p className="book-author" key={a}>{a}</p>)}</div>
)

export default AuthorList;