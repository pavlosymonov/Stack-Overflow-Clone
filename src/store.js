import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { questionsReducer, singleQuestionReducer } from './reducers';

const reducers = combineReducers({
  questionsReducer,
  singleQuestionReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
