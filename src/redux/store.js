import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';


const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

