import React from 'react';
import logoimage from "../../assests/images/burger-logo.png";
import classes from './Logo.css'
const logo = () => (
    <div className={classes.Logo}>
        <img src={logoimage} alt="logo" />
    </div>
);
export default logo; 