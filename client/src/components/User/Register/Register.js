import React, { Component } from 'react';
import axios from 'axios';

import './Register.css';
class Register extends Component {
    state = {
        registerForm:{
            name: '',
            email: '',
            password: '',
            cPassword: '',
            role: '',
            birthDate: '',
            address: '',
            companyName:'',
            companyAddress: ''
        },
        token: ''
    }
    inputChangeHandler = (e, inputName) => {
        let updatedRegisterForm = {
            ...this.state.registerForm
        }
        updatedRegisterForm[inputName] = e.target.value;
        this.setState({registerForm: updatedRegisterForm});
    }
    onRegister = (e) => {
        e.preventDefault();
        const payload = {
            name: this.state.registerForm.name,
            email: this.state.registerForm.email,
            password: this.state.registerForm.password,
            role: this.state.registerForm.role,
            birthDate: this.state.registerForm.birthDate,
            address: this.state.registerForm.address,
            companyName: this.state.registerForm.companyName,
            companyAddress: this.state.registerForm.companyAddress
        }
        console.log(payload);
        axios.post('/user/register',payload).then(response=>{
            console.log(response);
        });
    }
    render(){
        return(
            <div className="row">
            <div className="register-form">
                <h1 className="page-header">Register</h1>        
                    <div className="col-md-6">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" onChange={(event) => this.inputChangeHandler(event,'name')} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={(event) => this.inputChangeHandler(event,'email')} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={(event) => this.inputChangeHandler(event,'password')} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cPassword">Confirm Password</label>
                            <input type="password" onChange={(event) => this.inputChangeHandler(event,'cPassword')} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">What are you looking for?</label>
                            <select className="form-control" onChange={(event) => this.inputChangeHandler(event,'role')}>
                                <option value="employer">I am looking for candidates</option>
                                <option value="candidate">I am looking for a job</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthDate">Date of birth</label>
                            <input type="date" onChange={(event) => this.inputChangeHandler(event,'birthDate')} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" onChange={(event) => this.inputChangeHandler(event,'address')} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name (optional)</label>
                            <input type="text" onChange={(event) => this.inputChangeHandler(event,'companyName')} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyAddress">Company Address</label>
                            <input type="text" onChange={(event) => this.inputChangeHandler(event,'companyAddress')} className="form-control"/>
                        </div>
                        <button onClick={(event) => this.onRegister(event)} className="btn btn-primary" type="submit">Login</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;