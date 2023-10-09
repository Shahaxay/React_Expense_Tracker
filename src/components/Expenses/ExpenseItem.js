import './ExpenseItem.css'
import React from 'react';
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
    const clickHandler=(e)=>{
        let itemToDelete=e.target.parentElement;
        let nameOfItem=e.target.previousSibling.firstChild.textContent;
        itemToDelete.remove();
        console.log(`Expense on ${nameOfItem} got deleted`);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={props.amount}
                location={props.location}
                title={props.title} />
            <button onClick={clickHandler}>Delete Expense</button>
        </Card>
    );
}

export default ExpenseItem;