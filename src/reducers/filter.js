import { SET_FILTER, SET_QUERY } from '../actions/types';

const initialState = {
  filterBy: 'all',
  searchQuery: ''
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER:
      return {
        ...state,
        filterBy: payload
      };
    case SET_QUERY:
      return {
        ...state,
        searchQuery: payload
      };
    default:
      return state;
  }
};
