import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
const MyPosts = (props) => {

    let posts = props.userPosts.map(post=>{
        return (
            <div className="card mb-3 " key={post._id}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{post.category}</h6>
                    <p className="card-text">{post.description}</p>
                    <div className="small mb-2">{new Date(Date.parse(post.postedOn)).toDateString()}</div>
                    <Link to={"/myposts/update/"+post._id} className="btn btn-primary">Update Post</Link>
                </div>
            </div>
        )
    })
    return (
       <div>
            <h1>MyPosts</h1>
            <Link to="myposts/create" className="btn btn-primary">Create Post</Link>
            <div className="row justify-content-center">
                <div className="col-md-6">
                {posts}
                </div>
            </div>
       </div>
    );
}

const mapStateToProps = state =>{
    return {
        userPosts: state.post.userPosts
    }
}

export default connect(mapStateToProps, null)(MyPosts);