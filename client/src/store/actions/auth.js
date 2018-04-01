import axios from 'axios';
import * as actionTypes from './actionTypes';

export const loginUser = (email, password) => {
    return dispatch => {
        const user = {
            email,
            password
        }
        axios.post('/user/login',user).then(response=>{
            dispatch({type: actionTypes.AUTH_SUCCESS, payload: response.data});
        }).catch(error=>{
            console.log(error);
        })
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch({type:actionTypes.LOGOUT});
    }
}