import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/actions/auth';

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
    login = (e) => {
        e.preventDefault();
        this.props.onLogin(this.state.loginForm.email,this.state.loginForm.password);
        // axios.post('/user/login',this.state.loginForm).then(response=>{
        //     console.log(response);
        // });
    }

    render(){
        if(this.props.user){
            return  <Redirect to="/" />
        } else {
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
                            <button onClick={(event) => this.login(event)} className="btn btn-primary" type="submit">Login</button>
                        </form>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin:(email,password) => dispatch(actions.loginUser(email,password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);