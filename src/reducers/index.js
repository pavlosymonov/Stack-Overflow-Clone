import {
  QUESTIONS_LOADED,
  QUESTIONS_REQUESTED,
  QUESTIONS_ERROR,
  CHANGE_CURRENT_PAGE,
  SET_TOTAL_ITEMS_COUNT,
  CHANGE_PAGE_SIZE,
  SET_SORT,
  SET_ORDER
} from '../actions-types';

const initialState = {
  questions: [],
  loading: true,
  error: null,
  currentPage: 1,
  pageSize: 15,
  totalItems: 0,
  sort: "activity",
  order: "desc"
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_REQUESTED:
      return {
        ...state,
        questions: [],
        loading:true,
        error: null
      };
    case QUESTIONS_LOADED:
      return {
        ...state,
        questions: action.payload,
        loading: false,
        error: null
      };
    case QUESTIONS_ERROR:
      return {
        ...state,
        questions: [],
        loading:false,
        error: action.payload
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload
      };
    case SET_TOTAL_ITEMS_COUNT:
      return {
        ...state,
        totalItems: action.payload
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
};

export default questionsReducer;