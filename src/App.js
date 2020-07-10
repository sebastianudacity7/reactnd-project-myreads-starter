import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css'
import MyReads from './MyReads';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    myBooks: []
  }

  componentDidMount = () => {
    BooksAPI.getAll()
      .then(all => this.setState({ myBooks: all }));
  }

  onBookMove = ({ book, toShelf }) => {
    BooksAPI.update(book, toShelf);

    this.setState(state => {
      const myBooks = !book.shelf
        ? [...state.myBooks, { ...book, shelf: toShelf }]  // Put new book on the shelf and add to my books
        : toShelf === 'none'
          ? state.myBooks.filter(b => b.id !== book.id) // Remove book from my books
          : state.myBooks.map(b => (b.id === book.id ? { ...b, shelf: toShelf } : b)); // Put existing book on the new shelf

      return { myBooks };
    })
  }

  getAllShelfs = () => (
    {
      currentlyReading: {
        id: 'currentlyReading',
        name: 'Currently Reading',
        books: []
      },
      wantToRead: {
        id: 'wantToRead',
        name: 'Want to Read',
        books: []
      },
      read: {
        id: 'read',
        name: 'Read',
        books: []
      },
    }
  )

  render() {

    let shelfs = this.getAllShelfs();

    this.state.myBooks.forEach(b => {
      shelfs[b.shelf].books.push(b);
    });

    Object.values(shelfs).forEach(sh => {
      sh.books.sort((b1, b2) => b1.title.localeCompare(b2.title))
    });

    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <MyReads
            shelfs={Object.values(shelfs)}
            onBookMove={this.onBookMove} />
        )} />

        <Route path="/search" render={({ location, history }) => (
          <SearchBooks
            location={location}
            history={history}
            myBooks={this.state.myBooks}
            onBookMove={this.onBookMove} />
        )} />

      </div>
    )
  }
}

export default BooksApp
