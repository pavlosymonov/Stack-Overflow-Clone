import { QUESTIONS_LOADED } from '../actions-types';

export const questionsLoaded = (newQuestions) => {
  return {
    type: QUESTIONS_LOADED,
    payload: newQuestions
  };
};
