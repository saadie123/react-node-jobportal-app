import * as actionTypes from './actionTypes';
import axios from 'axios';
export const fetchPosts = () =>{
    return dispatch => {
        axios.get('/api/posts').then(response=>{
            dispatch({type:actionTypes.FETCH_POSTS, payload:response.data});
        }).catch(e=>{
            console.log(e);
        });
    }
}

export const createPost = (payload) => {
    return dispatch => {
        axios.post('/api/posts',payload).then(response=>{
            dispatch({type:actionTypes.CREATE_POST, payload:response.data.post});            
        }).catch(e=>{
            console.log(e);
        });
    }
}

export const updatePost = (payload,id) => {
    return dispatch => {
        axios.put('/api/posts/'+id,payload).then(response => {
            dispatch({type:actionTypes.CREATE_POST, payload:{post:response.data.post,id}});                        
        }).catch(e=>{
            console.log(e);
        })
    }
}

export const deletePost = (id) => {
    return dispatch => {
        axios.delete('/api/posts/'+id).then(response=>{
            dispatch({type:actionTypes.DELETE_POST, payload:{id}}); 
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
        });
    }
}