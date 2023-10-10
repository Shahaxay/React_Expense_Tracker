import './Expenses.css'
import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
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
  });
  const [selectedYear,setFilteredYear]=useState('2022');
  const changeFilterHandler=(selectYear)=>{
    setFilteredYear(selectYear)
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={selectedYear} onChangeFilter={changeFilterHandler}></ExpenseFilter>
      {expenseItem}
      </Card>
  );
}

export default Expenses;