import {createStore, applyMiddleware } from 'redux';

import rootReducer from './reducer/index';


import { loadState, saveState } from './localStorage';

import thunk from 'redux-thunk'

const persistedState  = loadState();

const store = createStore(rootReducer,persistedState,applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState())
})
export default store;