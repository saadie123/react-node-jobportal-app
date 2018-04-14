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
        case actionTypes.CREATE_POST:
            updatedState = {...state}
            updatedState.userPosts.push(action.payload);
            return updatedState;  
        case actionTypes.UPDATE_POST:
            updatedState = {...state};
            let index = updatedState.userPosts.findIndex(post=>{
                return post.id === action.payload.id
            })
            updatedState.userPosts[index] = payload.post;
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