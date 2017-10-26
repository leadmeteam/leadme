import { fromJS } from 'immutable';
import { createAction } from 'redux-actions';

const SET_FEED_INDEX = "ui/SET_FEED_INDEX";

export const setFeedIndex = createAction(SET_FEED_INDEX);

const initialState = fromJS({
    currentIndex: null
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_FEED_INDEX:
            return state.set('currentIndex', action.payload.value);
        default:
            return state;
    }
}