import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from './User/Login/Login';
import Register from './User/Register/Register';
import Navbar from './Navbar/Navbar';

class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>    
                    </Switch>
                </div>                
            </div>
        )
    }
}

export default App;