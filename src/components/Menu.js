import React from 'react';
import { Menu, Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';
import uniqBy from 'lodash/uniqBy';

import Cart from './Cart';

const MenuComponent = ({ items, count, totalPrice }) => {
  return (
    <Menu>
      <Menu.Item>Магазин книг</Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>Итого: {totalPrice} руб.</Menu.Item>

        <Popup
          content={
            items.length ? (
              items.map(item => <Cart {...item} />)
            ) : (
              <p>Корзина пустая</p>
            )
          }
          on='click'
          hideOnScroll
          trigger={<Menu.Item>Корзина ({count})</Menu.Item>}
        />
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = state => ({
  items: uniqBy(state.cart.items, item => item.id),
  count: state.cart.items.length,
  totalPrice: state.cart.items.reduce((total, item) => total + item.price, 0)
});

export default connect(mapStateToProps)(MenuComponent);
