import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';
import orderBy from 'lodash/orderBy';

import { getBooks } from './actions/books';
import BookCard from './components/BookCard';
import Menu from './components/Menu';
import Filter from './components/Filter';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author');
    case 'all':
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) => {
  return books.filter(
    book =>
      book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      book.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );
};

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};

function App({ getBooks, items, isLoading }) {
  useEffect(() => {
    axios.get('/books.json').then(({ data }) => getBooks(data));
  }, []);

  return (
    <Container>
      <Menu />
      <Filter />
      <Card.Group itemsPerRow={4}>
        {isLoading ? (
          <h1>Загрузка...</h1>
        ) : (
          items.map((item, idx) => <BookCard key={idx} {...item} />)
        )}
      </Card.Group>
    </Container>
  );
}

const mapStateToProps = state => ({
  items:
    state.books.items &&
    searchBooks(
      state.books.items,
      state.filter.filterBy,
      state.filter.searchQuery
    ),
  isLoading: state.books.isLoading
});

export default connect(mapStateToProps, { getBooks })(App);
