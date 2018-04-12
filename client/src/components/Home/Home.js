import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../store/actions/index';

class Home extends Component {
    componentWillMount(){
        this.props.onFetchUser();
        this.props.onFetchPosts();
    }
    render(){
        let posts = this.props.posts.map(post=>{
            return (
                <div className="card mb-3 " key={post._id}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{post.category}</h6>
                        <p className="card-text">{post.description}</p>
                        <div className="small mb-2">{new Date(Date.parse(post.postedOn)).toDateString()}</div>
                        <Link to={"/post/"+post._id} className="btn btn-primary">Go to post</Link>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="row mb-4 my-4 justify-content-center">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        {posts}
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchUser: () => dispatch(actions.fetchUser()),
        onFetchPosts: () => dispatch(actions.fetchPosts())
    }
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);