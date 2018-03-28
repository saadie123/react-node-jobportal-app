import React from 'react';

import classes from './Navbar.css';

const Navbar = (props) => {
    return(
        <div>
            <div className={classes.parent}>
            This is navbar
            </div>
            <button className={classes.button}>Okie Dokie</button>
        </div>
    )
}

export default Navbar; 