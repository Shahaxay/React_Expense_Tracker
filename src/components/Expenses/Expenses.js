import React, { useState } from 'react';

import './Expenses.css'

import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [selectedYear, setFilteredYear] = useState('2022');
  const changeFilterHandler = (selectYear) => {
    setFilteredYear(selectYear)
    props.onFilterChanged(selectYear);
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={selectedYear} onChangeFilter={changeFilterHandler}></ExpenseFilter>
      <ExpenseChart expenses={props.expenses}/>
      <ExpenseList items={props.expenses} />
    </Card>
  );
}

export default Expenses;