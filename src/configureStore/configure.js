import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';


const rootReducer = {

};

const reducer = combineReducers(rootReducer);

const middlewares = applyMiddleware(promiseMiddleware());

const configureStore = createStore(reducer, composeEnhancers(middlewares));

export default configureStore;