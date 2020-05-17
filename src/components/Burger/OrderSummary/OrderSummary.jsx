import React, { Component } from 'react'

import classes from './OrderSummary.css';
import Aux from '../../../HOC/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {


    render() {

        const emojis = {
            'salad': "🥗",
            'meat': '🥓',
            'bacon': "🍗",
            'cheese': '🧀'
        }
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                let name = igKey;
                if (name === 'bacon')
                    name = 'chicken';
                if (name === 'meat')
                    name = 'patty';
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{emojis[igKey]}&nbsp;{name}</span>: {this.props.ingredients[igKey]}
                    </li>
                )
            })
        return (
            <Aux>
                <div className={classes.heading}><h3>Your Order</h3></div>

                <div className={classes.OrderSummary}>
                    <p>A delicious burger with the following ingredients:</p>
                    <ul >
                        {ingredientSummary}
                    </ul>
                    <p><strong>Total Price :&nbsp;&#8377;&nbsp;{this.props.price}</strong></p>
                    <p>Continue to CheckOut ??</p>
                    <Button btnType="Danger" clicked={this.props.purchasedCanceled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.purchasedContinued}>CONTINUE</Button>
                </div>
            </Aux>
        )
    };
}
export default OrderSummary;