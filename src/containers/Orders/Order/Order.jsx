import React from 'react';
import classes from './Order.css';
const order = (props) => {
    const emojis = {
        'salad': "🥗",
        'meat': '🥓',
        'bacon': "🍗",
        'cheese': '🧀'
    }
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName],
            emoji: emojis[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span className={classes.ingredient}
            key={ig.name}>{ig.name} <span role="img">{ig.emoji}</span>({ig.amount})</span>
    })
    return (
        < div className={classes.Order} >
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price : <strong>&nbsp;&#8377;&nbsp;{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div >
    );
};
export default order;