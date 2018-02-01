
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import React from 'react';
// import { createLogger } from 'redux-logger';
import reducers, { initialState } from './reducers';

let enhancer = applyMiddleware(thunk);

let store = createStore(
    reducers,
    initialState,
    enhancer
);


export default store;