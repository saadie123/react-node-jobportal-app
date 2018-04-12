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