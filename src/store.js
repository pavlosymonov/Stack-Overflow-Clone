import { createStore } from 'redux';

import questionsReducer from './reducers';

const store = createStore(questionsReducer);

window.store = store;

export default store;
