import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: []
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
    
        default:
            return state;
    }
}

export default reducer;