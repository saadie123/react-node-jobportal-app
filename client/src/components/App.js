import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from './Home/Home';
import Login from './User/Login/Login';
import Register from './User/Register/Register';
import Post from './Post/Post';
import Navbar from './Navbar/Navbar';
import Modal from './Modal/Modal';
import MyPosts from './MyPosts/MyPosts';
import CreatePosts from './MyPosts/CreatePost/CreatePost';

class App extends Component{
    render(){
        return(
            <div>
                <Modal />
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/post/:id" component={Post}/>
                        <Route exact path ="/myposts" component={MyPosts} />
                        <Route path="/myposts/create" component={CreatePosts}/>
                    </Switch>
                </div>                
            </div>
        )
    }
}


export default App;