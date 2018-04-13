import axios from 'axios';
import {Redirect} from 'react-router-dom'
import * as actionTypes from './actionTypes';

export const fetchUser = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            return;
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.get('/user/current-user').then(response=>{
            dispatch({type: actionTypes.FETCH_USER, payload: {user:response.data.user,token:response.data.token}});
        })
    }
}

export const loginUser = (email, password) => {
    return dispatch => {
        const user = {
            email,
            password
        }
        axios.post('/user/login',user).then(response=>{
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;            
            dispatch({type: actionTypes.AUTH_SUCCESS, payload: response.data});
        }).catch(error=>{
            console.log(error);
        })
    }
}

export const registerUser = (payload) =>{
    return dispatch => {
        axios.post('/user/register',payload).then(response=>{
            console.log(response.data.message);
        }).catch(error=>{
            console.log(error);
        })
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch({type:actionTypes.LOGOUT});
        axios.defaults.headers.common['Authorization'] = '';                    
    }
}