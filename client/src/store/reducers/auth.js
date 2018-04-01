import * as actionTypes from '../actions/actionTypes';
const initialState = {
    token:'',
    user:null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            const updatedState = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return updatedState;
            break;
    
        default:
            return state;
            break;
    }
}

export default reducer;