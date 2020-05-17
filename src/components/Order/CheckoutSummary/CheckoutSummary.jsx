import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1><span role="img" aria-label="">😋</span>&nbsp;We hope it tastes well !!&nbsp;<span role="img" aria-label="">😋</span></h1>
            <div className={classes.BurgerCont}>
                <Burger ingredients={props.ingredients} belongToCheckoutSummary />
            </div>
            <Button
                btnType="Danger"
                clicked={props.onCheckoutCancelled}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.onCheckoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;