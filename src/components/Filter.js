import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { setFilter, setQuery } from '../actions/filter';

const Filter = ({ setFilter, filterBy, setQuery }) => {
  return (
    <Menu secondary>
      <Menu.Item active={filterBy === 'all'} onClick={() => setFilter('all')}>
        Все
      </Menu.Item>
      <Menu.Item
        active={filterBy === 'price_high'}
        onClick={() => setFilter('price_high')}
      >
        Цена (дорогие)
      </Menu.Item>
      <Menu.Item
        active={filterBy === 'price_low'}
        onClick={() => setFilter('price_low')}
      >
        Цена (дешевые)
      </Menu.Item>
      <Menu.Item
        active={filterBy === 'author'}
        onClick={() => setFilter('author')}
      >
        Автор
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>
          <Input
            onChange={e => setQuery(e.target.value)}
            icon='search'
            placeholder='Поиск...'
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = state => ({
  filterBy: state.filter.filterBy
});

export default connect(mapStateToProps, { setFilter, setQuery })(Filter);
