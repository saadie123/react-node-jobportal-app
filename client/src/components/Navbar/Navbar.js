import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar = (props) => {
    let navlinks = null;
    if(props.user){
        navlinks = (
            <ul className="navbar navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="userNavDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.user.name}
                    </a>
                    <div style={{minWidth:'7.5rem'}} className="dropdown-menu" aria-labelledby="userNavDropdown">
                        <a className="dropdown-item" href="#">Profile</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" 
                    data-toggle="modal" data-target="#logoutModal" 
                    href="javascript:void()">Logout</a>
                    </div>
                </li>
            </ul>
        )
    } else{
        navlinks = (
            <ul className="navbar navbar-nav">
                 <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>                
                </li>
            </ul>
        )
    }
    return(
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a href="#" className="navbar-brand">Job Portal</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                {props.user ? <li className="nav-item">
                    <a className="nav-link" href="#">My Posts</a>
                </li> : null}
                
            </ul>
            {navlinks}
        </div> 
       </nav>
    )
}
const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}


export default connect(mapStateToProps,null)(Navbar); 