import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    { label: 'Salad', type: 'salad', emoji: "🥗" },
    { label: 'Patty', type: 'meat', emoji: '🥓' },
    { label: 'Chicken', type: 'bacon', emoji: "🍗" },
    { label: 'Cheese', type: 'cheese', emoji: '🧀' }
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p >Current Price :&nbsp;&#8377;&nbsp;{props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                emoji={ctrl.emoji}
                added={() => { props.ingredientAdded(ctrl.type) }}
                removed={() => { props.ingredientRemoved(ctrl.type) }}
                disabled={props.disabledinfo[ctrl.type]} />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
)
export default buildControls;