import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import questionsReducer from './reducers';

const store = createStore(questionsReducer, applyMiddleware(thunkMiddleware));

export default store;
