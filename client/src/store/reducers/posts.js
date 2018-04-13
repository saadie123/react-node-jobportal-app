import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    userPosts: []
}

const reducer = (state = initialState, action) => {
    let updatedState;
    switch (action.type) {
        case actionTypes.FETCH_POSTS:
            updatedState = {
                ...state,
                posts: action.payload.posts
            }
            return updatedState;
        case actionTypes.FETCH_USER_POSTS:
            updatedState = {
                ...state,
                userPosts: action.payload.userPosts
            }
            return updatedState;
        default:
            return state;
    }
}

export default reducer;