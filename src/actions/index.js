import {
  QUESTIONS_LOADED,
  QUESTIONS_REQUESTED,
  QUESTIONS_ERROR,
  CHANGE_CURRENT_PAGE,
  SET_TOTAL_ITEMS_COUNT
} from '../actions-types';

const questionsLoaded = (newQuestions) => (
  { type: QUESTIONS_LOADED, payload: newQuestions }
);
const questionsRequested = () => (
  { type: QUESTIONS_REQUESTED }
  );
const questionsError = (error) => (
  { type: QUESTIONS_ERROR, payload: error }
  );
const setTotalItemsCount = (totalItemsCount) => (
  { type: SET_TOTAL_ITEMS_COUNT, payload: totalItemsCount}
);

export const fetchQuestions = (dispatch, sofService) => (url) => {
  dispatch(questionsRequested());
  sofService.getQuestions(url)
    .then(data => {
      dispatch(setTotalItemsCount(data.total));
      dispatch(questionsLoaded(data.items));
    })
    .catch(error => dispatch(questionsError(error)));
}

export const setCurrentPage = (newPageId) => ({ type: CHANGE_CURRENT_PAGE, payload: newPageId});
