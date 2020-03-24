import { GET_BOOKS } from './types';

export const getBooks = books => ({
  type: GET_BOOKS,
  payload: books
});
