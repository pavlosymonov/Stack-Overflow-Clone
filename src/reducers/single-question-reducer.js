const initialState = {
  question: {},
  loading: true,
  error: null,
};

const singleQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUESTION_REQUESTED":
      return {
        ...state,
        questions: {},
        loading: true,
        error: null
      };
    case "QUESTION_LOADED":
      return {
        ...state,
        questions: action.payload,
        loading: false,
        error: null
      };
    case "QUESTION_ERROR":
      return {
        ...state,
        questions: {},
        loading:false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default singleQuestionReducer;