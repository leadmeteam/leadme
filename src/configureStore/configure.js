import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import auth from '../ducks/auth.duck';
import feed from '../ducks/feed.duck';
import guide from '../ducks/guide.duck';
import ui from '../ducks/ui.duck';

const rootReducer = {
    auth,
    feed,
    guide,
    ui,
};

const reducer = combineReducers(rootReducer);

const middlewares = applyMiddleware(promiseMiddleware());

const configureStore = createStore(reducer, compose(middlewares));

export default configureStore;