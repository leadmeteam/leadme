import { fromJS } from 'immutable';
import * as rs from '../services/requestStatus';
import * as feed from '../services/API/feed';

const POST_FEED = "feed/POST_FEED";
const GET_FIRST_FEED_LIST = "feed/GET_FIRST_FEED_LIST";
const GET_NEW_FEED_LIST = "feed/GET_NEW_FEED_LIST";
const GET_FEED_DETAIL = "feed/GET_FEED_DETAIL";
const TOGGLE_LIKE_FEED = "feed/LIKE_FEED";
const UPDATE_FEED = "feed/UPDATE_FEED";
const REMOVE_FEED = "feed/POST_REMOVE";
const POST_FEED_COMMENT = "feed/POST_FEED_COMMENT";
const GET_FEED_COMMENT_LIST = "feed/GET_FEED_COMMENT_LIST";
const REMOVE_FEED_COMMENT = "feed/REMOVE_FEED_COMMENT";

export const postFeed = () => ({
    type: POST_FEED,
    payload: feed.requestPostFeed()
});

export const getFirstFeedList = () => ({
    type: GET_FIRST_FEED_LIST,
    payload: feed.requestFirstFeedList()
});

export const getNewFeedList = (lastFeedId) => ({
    type: GET_NEW_FEED_LIST,
    payload: feed.requestNewFeedList()
});

export const getFeedDetail = (feedId) => ({
    type: GET_FEED_DETAIL,
    payload: feed.requestGetFeedDetail()
});

export const toggleLikeFeed = (feedId) => ({
    type: TOGGLE_LIKE_FEED,
    payload: feed.requestToggleLikeFeed()
});

export const updateFeed = (feedId) => ({
    type: UPDATE_FEED,
    payload: feed.requestUpdateFeed()
});

export const removeFeed = (feedId) => ({
    type: REMOVE_FEED,
    payload: feed.requestRemoveFeed()
});

export const postFeedComment = (feedId) => ({
    type: POST_FEED_COMMENT,
    payload: feed.requestPostFeedComment()
});

export const getFeedCommentList = (feedId) => ({
    type: GET_FEED_COMMENT_LIST,
    payload: feed.requestGetFeedCommentList()
});

export const removeFeedComment = (feedId) => ({
    type: REMOVE_FEED_COMMENT,
    payload: feed.requestRemoveFeedComment()
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
        getFeedDetail: {
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
        getFeedCommentList: {
            ...rs.request
        },
        removeFeedComment: {
            ...rs.request
        }
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
        default:
            return state;
    }
}