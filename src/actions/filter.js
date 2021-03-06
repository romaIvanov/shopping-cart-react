import { SET_FILTER, SET_QUERY } from './types';

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
});

export const setQuery = query => ({
  type: SET_QUERY,
  payload: query
});
