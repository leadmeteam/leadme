import { fromJS } from 'immutable';
import * as rs from '../services/requestStatus';
import * as guide from '../services/API/guide';

const GET_GUIDE_LIST = "guide/GET_GUIDE_LIST";
const REGISTER_GUIDE = "guide/REGISTER_GUIDE";

export const getGuideList = () => ({
    type: GET_GUIDE_LIST,
    payload: guide.requestGetGuideList()
});

export const registerGuide = () => ({
    type: REGISTER_GUIDE,
    payload: guide.requestRegisterGuide()
});

const initialState = fromJS({
    requests: {
        guideList: {
            ...rs.request
        },
        register: {
            ...rs.request
        }
    },
    guides: []
});

export default function reducer(state = initialState, action) {
    switch(action.types) {
        case `${GET_GUIDE_LIST}_PENDING`:
            return state.mergeIn(['requests', 'guideList'], fromJS(rs.pending));
        case `${GET_GUIDE_LIST}_FULFILLED`:
            return state.mergeIn(['requests', 'guideList'], fromJS(rs.fulfilled));
        case `${GET_GUIDE_LIST}_REJECTED`:
            return state.mergeIn(['requests', 'guideList'], fromJS(rs.rejected));
        case `${REGISTER_GUIDE}_PENDING`:
            return state.mergeIn(['requests', 'register'], fromJS(rs.pending));
        case `${REGISTER_GUIDE}_FULFILLED`:
            return state.mergeIn(['requests', 'register'], fromJS(rs.fulfilled));
        case `${REGISTER_GUIDE}_REJECTED`:
            return state.mergeIn(['requests', 'register'], fromJS(rs.rejected));
        default:
            return state;
    }
}