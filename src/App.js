import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';

import { getBooks } from './actions/books';
import BookCard from './components/BookCard';
import Menu from './components/Menu';

function App({ getBooks, items, isLoading }) {
  useEffect(() => {
    axios.get('/books.json').then(({ data }) => getBooks(data));
  }, []);

  return (
    <Container>
      <Menu />
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
  items: state.books.items,
  isLoading: state.books.isLoading
});

export default connect(mapStateToProps, { getBooks })(App);
