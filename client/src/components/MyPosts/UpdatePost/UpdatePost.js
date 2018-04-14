import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/actions/index';
class UpdatePost extends Component {
    state={
        postForm:{
            title:'',
            description:'',
            type:'',
            shift:'',
            category:'',
            experience: '',
            salary: '',
            qualification: '',
            location: '',
            contact: '',
            lastDate: null
        }
    }
    componentDidMount() {
        axios.get('/api/posts/'+this.props.match.params.id).then(response=>{
            let post = response.data.post;
            console.log(post);
            let initialPostForm = {
                ...this.state.postForm
            }
            initialPostForm.title = post.title;
            initialPostForm.description = post.description;
            initialPostForm.type = post.type;
            initialPostForm.shift = post.shift;
            initialPostForm.category = post.category;
            initialPostForm.experience = post.experience;
            initialPostForm.salary = post.salary;
            initialPostForm.qualification = post.qualification;
            initialPostForm.location = post.location;
            initialPostForm.contact = post.contact;
            initialPostForm.lastDate = post.lastDate;

            this.setState({postForm:initialPostForm});
            
        }).catch(e=>{
            console.log(e);
        })
    }
    inputChangeHandler = (e,inputName) => {
        e.preventDefault();
        let updatedPostForm = {
            ...this.state.postForm
        }
        updatedPostForm[inputName] = e.target.value;
        this.setState({postForm:updatedPostForm});
    }
    onUpdatePost = () =>{
        const payload = {
            ...this.state.postForm,
            salary: Number(this.state.postForm.salary)
        }
        console.log(this.state.postForm);
        this.props.onUpdatePost(payload,this.props.match.params.id);
    }


    render(){
        return (
           <div className="row justify-content-center">
            <div className="col-md-8">
                <h1>Update Post</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input 
                        value={this.state.postForm.title}
                        onChange={(event)=>this.inputChangeHandler(event,'title')} 
                        type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea
                        value={this.state.postForm.description} 
                        onChange={(event)=>this.inputChangeHandler(event,'description')} 
                        type="text" rows="5" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Type</label>
                        <input
                        value={this.state.postForm.type} 
                        onChange={(event)=>this.inputChangeHandler(event,'type')} 
                        type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Shift</label>
                        <input
                        value={this.state.postForm.shift} 
                        onChange={(event)=>this.inputChangeHandler(event,'shift')} 
                        type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Category</label>
                        <input 
                        value={this.state.postForm.category}
                        onChange={(event)=>this.inputChangeHandler(event,'category')} 
                        type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Experience</label>
                        <input
                        value={this.state.postForm.experience} 
                        onChange={(event)=>this.inputChangeHandler(event,'experience')} 
                        type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Salary</label>
                        <input 
                        value={this.state.postForm.salary}
                        onChange={(event)=>this.inputChangeHandler(event,'salary')} 
                        type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Minimum Qualification</label>
                        <input
                        value={this.state.postForm.qualification} 
                        onChange={(event)=>this.inputChangeHandler(event,'qualification')} 
                        type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Location</label>
                        <input
                        value={this.state.postForm.location} 
                        onChange={(event)=>this.inputChangeHandler(event,'location')} 
                        type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contact No.</label>
                        <input
                        value={this.state.postForm.contact} 
                        onChange={(event)=>this.inputChangeHandler(event,'contact')} 
                        type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Date</label>
                        <input 
                        value={this.state.postForm.lastDate}
                        onChange={(event)=>this.inputChangeHandler(event,'lastDate')} 
                        type="date" className="form-control"/>
                    </div>
                    <button onClick={this.onUpdatePost} className="btn btn-primary" type="button">Update</button>
                </form>
            </div>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.post.userPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdatePost: (post,id) => dispatch(actions.updatePost(post,id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);