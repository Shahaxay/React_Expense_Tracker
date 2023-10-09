import './Card.css'
import React from 'react';
const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        //making rapper component
        <div className={classes}>{props.children}</div>
    );
}

export default Card;