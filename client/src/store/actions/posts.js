import * as actionTypes from './actionTypes';
import axios from 'axios';
export const fetchPosts = () =>{
    return dispatch => {
        axios.get('/api/posts').then(response=>{
            dispatch({type:actionTypes.FETCH_POSTS, payload:response.data});
        }).catch(e=>{
            console.log(e);
        })
    }
}

export const fetchUserPosts = () => {
    return dispatch => {
        axios.get('/user/myposts').then(response=>{
            console.log(response);
            dispatch({type: actionTypes.FETCH_USER_POSTS, payload:{userPosts:response.data.posts}});
        }).catch(e=>{
            console.log(e);
        })
    }
}