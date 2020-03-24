import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = book => ({
  type: ADD_TO_CART,
  payload: book
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
});
