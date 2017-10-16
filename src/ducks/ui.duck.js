import { fromJS } from 'immutable';
import { createAction } from 'redux-actions';

const SHOW_BUTTON = "ui/SHOW_BUTTON";
const HIDE_BUTTON = "ui/HIDE_BUTTON";

export const showButton = createAction(SHOW_BUTTON);
export const hideButton = createAction(HIDE_BUTTON);

const initialState = fromJS({
    visible: false
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_BUTTON:
            return state.set('visible', true);
        case HIDE_BUTTON:
            return state.set('visible', false);
        default:
            return state;
    }
}