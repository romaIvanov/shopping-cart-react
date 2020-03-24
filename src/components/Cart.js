import React from 'react';
import { Button, Image, List } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { removeFromCart } from '../actions/cart';

const Cart = ({ image, title, id, removeFromCart }) => {
  return (
    <List selection divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <Button color='red' onClick={() => removeFromCart(id)}>
            Удалить
          </Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>{title}</List.Content>
      </List.Item>
    </List>
  );
};

export default connect(null, { removeFromCart })(Cart);
