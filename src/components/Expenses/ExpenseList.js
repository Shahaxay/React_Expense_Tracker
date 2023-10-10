import React from "react"
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Exception Found</h2>
    }
    const singleExpenseMessage=<h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
    return (
        <ul className="expense-list">
            {props.items.map((expense) =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    location={expense.location}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
            {props.items.length===1 && singleExpenseMessage}
        </ul>
    );
}
export default ExpenseList;