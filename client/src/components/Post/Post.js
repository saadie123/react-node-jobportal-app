import React, { Component } from 'react';
import {connect} from 'react-redux';
class Post extends Component{
    state = {
        post: {}
    }
    componentDidMount(){
       let singlePost = this.props.posts.find(post=>{
            return post._id === this.props.match.params.id
        });
        this.setState({post:singlePost});
    }
    render(){
        return (
            <div>
                <h1 className="page-header">{this.state.post.title}</h1>
                <p className="lead">{this.state.post.description}</p>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td>Posted On</td>
                            <td>{new Date(Date.parse(this.state.post.postedOn)).toDateString()}</td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>{this.state.post.category}</td>
                        </tr>
                        <tr>
                            <td>Shift</td>
                            <td>{this.state.post.shift}</td>
                        </tr>
                        <tr>
                            <td>Job Type</td>
                            <td>{this.state.post.type}</td>
                        </tr>
                        <tr>
                            <td>Experience</td>
                            <td>{this.state.post.experience}</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>{this.state.post.salary}</td>
                        </tr>
                        <tr>
                            <td>Qualification</td>
                            <td>{this.state.post.qualification}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>{this.state.post.location}</td>
                        </tr>
                        <tr>
                            <td>Contact No.</td>
                            <td>{this.state.post.contact}</td>
                        </tr>
                        <tr>
                            <td>Last Date</td>
                            <td>{new Date(Date.parse(this.state.post.lastDate)).toDateString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps, null)(Post);