import { fromJS } from 'immutable';
import * as rs from '../services/requestStatus';
import * as auth from '../services/API/auth';

const SIGN_UP = "auth/SIGN_UP";

export const signUp = (token) => ({
    type: SIGN_UP,
    payload: auth.requestSignUp(token)
});

const initialState = fromJS({
    requests: {
        signUp: {
            ...rs.request
        }
    },
    valid: {
        signUp: false
    }
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case `${SIGN_UP}_PENDING`:
            return state.mergeIn(['requests', 'signUp'], fromJS(rs.pending));
        case `${SIGN_UP}_FULFILLED`:
            return state.mergeIn(['requests', 'signUp'], fromJS(rs.fulfilled))
                        .setIn(['valid', 'signUp'], true);
        case `${SIGN_UP}_REJECTED`:
            return state.mergeIn(['requests', 'signUp'], fromJS(rs.rejected))
                        .setIn(['valid', 'signUp'], false);
        default:
            return state;
    }
}