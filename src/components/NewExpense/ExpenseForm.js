import React, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const minDate = '2019-01-02';
    const maxDate = '2023-10-10';
    const minAmount = 0;
    const stepAmount = 0.1;

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');
    //event deligation
    const formIntputChangeHandler = (e) => {
        const value = e.target.value
        switch (e.target.getAttribute('id')) {
            case 'title': setEnteredTitle(value); break;
            case 'amount': setEnteredAmount(value); break;
            case 'date': setEnteredDate(value); break;
            case 'location': setEnteredLocation(value); break;
            default: console.log("input other than tile amount date changes");
        }
    }
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        const expenseObj={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
            location:enteredLocation
        }
        props.onSaveExpenseData(expenseObj);
        //clearing form
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredLocation('');
    }
    return (
        <form className='new-expense__controls' onChange={formIntputChangeHandler}onSubmit={formSubmitHandler} >
            <div className='new-expense__control'>
                <label for="title">Expense Title</label>
                <input type="text" id="title" value={enteredTitle}/>
            </div>
            <div className='new-expense__control'>
                <label for="amount">Expense Amount</label>
                <input type="number" id="amount" min={minAmount} step={stepAmount} value={enteredAmount} />
            </div>
            <div className='new-expense__control'>
                <label for="date">Date</label>
                <input type="date" id="date" min={minDate} max={maxDate} value={enteredDate}/>
            </div>
            <div className='new-expense__control'>
                <label for="location">Location</label>
                <input type="text" id="location" value={enteredLocation}/>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;