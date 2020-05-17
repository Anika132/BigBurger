import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><span role="img" aria-label="">&#127828;</span>&nbsp;Build Burger</NavigationItem>
        {props.isAuth
            ? <NavigationItem link="/orders"><span role="img" aria-label="">&#128220;</span>
            &nbsp;Orders</NavigationItem>
            : null}
        {!props.isAuth
            ? <NavigationItem link="/auth"><i className="fas fa-sign-in-alt"></i>&nbsp;Sign In</NavigationItem>
            : <NavigationItem link="/logout"><i className="fas fa-sign-out-alt"></i>&nbsp;Logout</NavigationItem>}
    </ul>
);
export default navigationItems;