import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      };
    default:
      return state;
  }
};
