import { QUESTIONS_LOADED } from '../actions-types';

const initialState = {
  questions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_LOADED:
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
};

export default reducer;