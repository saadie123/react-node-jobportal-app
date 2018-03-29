import React, { Component } from 'react';
import axios from 'axios';

import './Login.css';
class Login extends Component {
    state = {
        loginForm:{
            email: '',
            password: ''
        },
        token: ''
    }
    inputChangeHandler = (e, inputName) => {
        let updatedLoginForm = {
            ...this.state.loginForm
        }
        updatedLoginForm[inputName] = e.target.value;
        this.setState({loginForm: updatedLoginForm});
    }
    onLogin = (e) => {
        e.preventDefault();
        axios.post('/user/login',this.state.loginForm).then(response=>{
            console.log(response);
        });
    }

    render(){
        return(
            <div className="row">
            <div className="login-form">
                <h1 className="page-header">Login</h1>        
                    <div className="col-md-6">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={(event) => this.inputChangeHandler(event,'email')} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={(event) => this.inputChangeHandler(event,'password')} className="form-control"/>
                        </div>
                        <button onClick={(event) => this.onLogin(event)} className="btn btn-primary" type="submit">Login</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;