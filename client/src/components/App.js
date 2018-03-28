import React, { Component } from 'react';

import classes from './App.css';

import Navbar from './Navbar/Navbar';

class App extends Component{
    render(){
        return(
            <div className={classes.App}>
                <Navbar />
                This is App Component
            </div>
        )
    }
}

export default App;