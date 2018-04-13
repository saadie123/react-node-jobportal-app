import React, { Component } from 'react';
import axios from 'axios';
class CreatePost extends Component {
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
    inputChangeHandler = (e,inputName) => {
        e.preventDefault();
        let updatedPostForm = {
            ...this.state.postForm
        }
        updatedPostForm[inputName] = e.target.value;
        this.setState({postForm:updatedPostForm});
    }
    onCreatePost = () =>{
        const payload = {
            ...this.state.postForm,
            salary: Number(this.state.postForm.salary)
        }
        axios.post('/api/posts',payload).then(response=>{
        }).catch(e=>{
            console.log(e);
        })
    }


    render(){
        return (
           <div className="row justify-content-center">
            <div className="col-md-8">
                <form>
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input onChange={(event)=>this.inputChangeHandler(event,'title')} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea onChange={(event)=>this.inputChangeHandler(event,'description')} type="text" rows="5" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Type</label>
                        <input onChange={(event)=>this.inputChangeHandler(event,'type')} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Shift</label>
                        <input onChange={(event)=>this.inputChangeHandler(event,'shift')} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Category</label>
                        <input onChange={(event)=>this.inputChangeHandler(event,'category')} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Experience</label>
                        <input onChange={(event)=>this.inputChangeHandler(event,'experience')} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Salary</label>
                        <input onChange={(event)=>this.inputChangeHandler(event,'salary')} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Minimum Qualification</label>
                        <input onChange={(event)=>this.inputChangeHandler(event,'qualification')} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Location</label>
                        <input onChange={(event)=>this.inputChangeHandler(event,'location')} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contact No.</label>
                        <input onChange={(event)=>this.inputChangeHandler(event,'contact')} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Date</label>
                        <input onChange={(event)=>this.inputChangeHandler(event,'lastDate')} type="date" className="form-control"/>
                    </div>
                    <button onClick={this.onCreatePost} className="btn btn-primary" type="button">Create</button>
                </form>
            </div>
           </div>
        )
    }
}

export default CreatePost;