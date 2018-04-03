import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from './Home/Home';
import Login from './User/Login/Login';
import Register from './User/Register/Register';
import Navbar from './Navbar/Navbar';
import Modal from './Modal/Modal';

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
                    </Switch>
                </div>                
            </div>
        )
    }
}


export default App;