import { fromJS } from 'immutable';
import * as rs from '../services/requestStatus';
import * as feed from '../services/API/feed';

const POST_FEED = "feed/POST_FEED";
const GET_FIRST_FEED_LIST = "feed/GET_FIRST_FEED_LIST";
const GET_NEW_FEED_LIST = "feed/GET_NEW_FEED_LIST";
const TOGGLE_LIKE_FEED = "feed/LIKE_FEED";
const UPDATE_FEED = "feed/UPDATE_FEED";
const REMOVE_FEED = "feed/POST_REMOVE";
const POST_FEED_COMMENT = "feed/POST_FEED_COMMENT";
const REMOVE_FEED_COMMENT = "feed/REMOVE_FEED_COMMENT";

export const postFeed = (district, feedBody, photoUrl) => ({
    type: POST_FEED,
    payload: feed.requestPostFeed(district, feedBody, photoUrl)
});

export const getFirstFeedList = () => ({
    type: GET_FIRST_FEED_LIST,
    payload: feed.requestFirstFeedList()
});

export const toggleLikeFeed = (feedId) => ({
    type: TOGGLE_LIKE_FEED,
    payload: feed.requestToggleLikeFeed(feedId)
});

export const updateFeed = (feedId) => ({
    type: UPDATE_FEED,
    payload: feed.requestUpdateFeed()
});

export const removeFeed = (feedId) => ({
    type: REMOVE_FEED,
    payload: feed.requestRemoveFeed()
});

export const postFeedComment = (feedId, comment) => ({
    type: POST_FEED_COMMENT,
    payload: feed.requestPostFeedComment(feedId, comment)
});

export const removeFeedComment = (feedId, commentId) => ({
    type: REMOVE_FEED_COMMENT,
    payload: feed.requestRemoveFeedComment(feedId, commentId)
});

const initialState = fromJS({
    requests: {
        postFeed: {
            ...rs.request
        },
        getFirstFeedList: {
            ...rs.request
        },
        getNewFeedList: {
            ...rs.request
        },
        toggleLikeFeed: {
            ...rs.request
        },
        updateFeed: {
            ...rs.request
        },
        removeFeed: {
            ...rs.request
        },
        postFeedComment: {
            ...rs.request
        },
        removeFeedComment: {
            ...rs.request
        }
    },
    valid: {
        firstFeedList: false,
        newFeedList: false,
        feedDetail: false
    },
    feeds: []
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case `${POST_FEED}_PENDING`:
            return state.mergeIn(['requests', 'postFeed'], fromJS(rs.pending));
        case `${POST_FEED}_FULFILLED`:
            return state.mergeIn(['requests', 'postFeed'], fromJS(rs.fulfilled));
        case `${POST_FEED}_REJECTED`:
            return state.mergeIn(['requests', 'postFeed'], fromJS(rs.rejected));
        case `${GET_FIRST_FEED_LIST}_PENDING`:
            return state.mergeIn(['requests', 'getFirstFeedList'], fromJS(rs.pending));
        case `${GET_FIRST_FEED_LIST}_FULFILLED`:
            return state.mergeIn(['requests', 'getFirstFeedList'], fromJS(rs.fulfilled))
                        .setIn(['valid', 'firstFeedList'], true)
                        .set('feeds', fromJS(action.payload.data));
        case `${GET_FIRST_FEED_LIST}_REJECTED`:
            return state.mergeIn(['requests', 'getFirstFeedList'], fromJS(rs.rejected))
                        .setIn(['valid', 'firstFeedList'], false);
        case `${POST_FEED_COMMENT}_PENDING`:
            return state.mergeIn(['requests', 'postFeedComment'], fromJS(rs.pending));
        case `${POST_FEED_COMMENT}_FULFILLED`:
            return state.mergeIn(['requests', 'postFeedComment'], fromJS(rs.fulfilled));
        case `${POST_FEED_COMMENT}_REJECTED`:
            return state.mergeIn(['requests', 'postFeedComment'], fromJS(rs.rejected));
        case `${REMOVE_FEED_COMMENT}_PENDING`:
            return state.mergeIn(['requests', 'removeFeedComment'], fromJS(rs.pending));
        case `${REMOVE_FEED_COMMENT}_FULFILLED`:
            return state.mergeIn(['requests', 'removeFeedComment'], fromJS(rs.pending));
        case `${REMOVE_FEED_COMMENT}_REJECTED`:
            return state.mergeIn(['requests', 'removeFeedComment'], fromJS(rs.rejected));
        case `${TOGGLE_LIKE_FEED}_PENDING`:
            return state.mergeIn(['requests', 'toggleLikeFeed'], fromJS(rs.pending));
        case `${TOGGLE_LIKE_FEED}_FULFILLED`:
            return state.mergeIn(['requests', 'toggleLikeFeed'], fromJS(rs.fulfilled));
        case `${TOGGLE_LIKE_FEED}_REJECTED`:
            return state.mergeIn(['requests', 'toggleLikeFeed'], fromJS(rs.rejected));
        default:
            return state;
    }
}