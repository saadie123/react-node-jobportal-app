import * as actionTypes from '../actions/actionTypes';
const initialState = {
    token:null,
    user:null
}

const reducer = (state = initialState, action) => {
    let updatedState;
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            updatedState = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return updatedState;
        case actionTypes.LOGOUT:
            localStorage.removeItem('token');
            updatedState = {
                ...state,
                user: null,
                token: null
            }
            return updatedState;
        default:
            return state;
            break;
    }
}

export default reducer;