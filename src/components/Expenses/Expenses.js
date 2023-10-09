import './Expenses.css'
import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
const Expenses = () => {
  const expenses = [
    { id: '1', title: "Laptop", location: 'flipkart', amount: '80000', date: new Date(2020, 9, 18) },
    { id: '2', title: "Headphone", location: 'Myntra', amount: '5000', date: new Date(2021, 9, 18) },
    { id: '3', title: "Microphone", location: 'flipkart', amount: '1000', date: new Date(2022, 9, 18) },
    { id: '4', title: "Harddisk", location: 'Amazon', amount: '8000', date: new Date(2023, 9, 18) },
  ];
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