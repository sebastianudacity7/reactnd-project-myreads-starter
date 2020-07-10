import React from 'react';
import * as BooksAPI from './BooksAPI';
import BookGrid from './BooksGrid';
import SearchBooksBar from './SearchBooksBar';

class SearchBooks extends React.Component {

    state = {
        query: '',
        books: [],
        showMyBooks: true
    }

    componentDidMount() {
        this.loadStateFromUrlParams();
    }

    loadStateFromUrlParams = () => {
        const params = new URLSearchParams(this.props.location.search);

        params.get("showMyBooks") === 'false' && this.setState(s => ({ showMyBooks: false }));

        const query = params.get("query");
        query && this.onQueryChanged(query);
    }

    setShowMyBooksUrlParam = (showMyBooks) => this.setUrlParams(params => {
        showMyBooks
            ? params.delete("showMyBooks")
            : params.set("showMyBooks", showMyBooks);
    })

    setQueryUrlParam = (query) => this.setUrlParams(params => {
        query
            ? params.set("query", query)
            : params.delete("query");
    })

    setUrlParams = (setup) => {
        const params = new URLSearchParams(this.props.location.search);
        setup(params);
        this.props.history.replace({ pathname: '/search', search: params.toString() });
    }

    onShowMyBooksChanged = (showMyBooks) => {
        this.setShowMyBooksUrlParam(showMyBooks);
        this.setState(s => ({ showMyBooks: showMyBooks }));
    }

    onQueryChanged = (q) => {
        this.setQueryUrlParam(q);
        this.setState(s => ({ query: q, books: [] }));

        q && BooksAPI.search(q.trim())
            .then(books => this.setState(s => s.query !== q
                ? {} // Do not populate result books if the response is for a different query than the current one
                : { books: books.error ? [] : books }));
    }

    render = () => {
        const { myBooks, onBookMove } = this.props;

        const books = this.state.showMyBooks
            ? this.state.books.map(book => {
                const myBook = myBooks.find(b => b.id === book.id);
                return myBook ? { ...book, shelf: myBook.shelf } : book
            })
            : this.state.books.filter(book => !myBooks.some(b => b.id === book.id));

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <SearchBooksBar
                        query={this.state.query}
                        onQueryChanged={this.onQueryChanged}

                        showMyBooks={this.state.showMyBooks}
                        onShowMyBooksChanged={this.onShowMyBooksChanged}
                    />
                </div>
                <div className="search-books-results">
                    <BookGrid books={books} onBookMove={onBookMove} />
                </div>
            </div>
        )
    }
}

export default SearchBooks;