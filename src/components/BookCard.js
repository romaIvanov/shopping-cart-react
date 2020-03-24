import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cart';

const BookCard = book => {
  const { image, title, author, price, addToCart, addedCount } = book;
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon name='rub' />
        {price}
      </Card.Content>
      <Button onClick={() => addToCart(book)}>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

const mapStateToProps = (state, { id }) => ({
  addedCount: state.cart.items.reduce(
    (count, item) => count + (item.id === id ? 1 : 0),
    0
  )
});

export default connect(mapStateToProps, { addToCart })(BookCard);
