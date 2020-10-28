import {
  QUESTIONS_LOADED,
  QUESTIONS_REQUESTED,
  QUESTIONS_ERROR,
  CHANGE_CURRENT_PAGE,
  CHANGE_PAGE_SIZE,
  SET_TOTAL_ITEMS_COUNT,
  SET_ORDER,
  SET_SORT
} from '../actions-types';

import sofService from '../services/sof-service';

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

export const getQuestions = (url) => (dispatch) => {
  dispatch(questionsRequested());
  sofService.getQuestions(url)
    .then(data => {
      dispatch(setTotalItemsCount(data.total));
      dispatch(questionsLoaded(data.items));
    })
    .catch(error => dispatch(questionsError(error)));
}

export const setCurrentPage = (newPageId) => ({ type: CHANGE_CURRENT_PAGE, payload: newPageId });
export const setPageSize = (pageSize) => ({ type: CHANGE_PAGE_SIZE, payload: pageSize });
export const setOrder = (order) => ({ type: SET_ORDER, payload: order });
export const setSort = (sort) => ({ type: SET_SORT, payload: sort });
