import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuComponent = () => {
  return (
    <Menu>
      <Menu.Item>Магазин книг</Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>Итого:</Menu.Item>

        <Menu.Item>Корзина</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MenuComponent;
