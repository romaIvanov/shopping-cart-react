import { GET_BOOKS } from '../actions/types';

const initialState = {
  items: null,
  isLoading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        items: payload,
        isLoading: false
      };
    default:
      return state;
  }
};
