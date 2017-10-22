import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import auth from '../ducks/auth.duck';
import ui from '../ducks/ui.duck';

const rootReducer = {
    auth,
    ui,
};

const reducer = combineReducers(rootReducer);

const middlewares = applyMiddleware(promiseMiddleware());

const configureStore = createStore(reducer, compose(middlewares));

export default configureStore;