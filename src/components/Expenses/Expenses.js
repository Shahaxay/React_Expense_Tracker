import './Expenses.css'
import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
const Expenses = (props) => {
  const expenses=props.expenses;
  // console.log(expenses);
  const expenseItem = expenses.map((expense) => {
    return (
      <ExpenseItem
        id={expense.id}
        title={expense.title}
        location={expense.location}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>);
  })
  return (
    <Card className='expenses'>{expenseItem}</Card>
  );
}

export default Expenses;