import React from 'react';
import './ExpenseForm.css'
const ExpenseForm = () => {
    const minDate='2019-01-02';
    const maxDate='2023-10-10';
    const minAmount=0;
    const stepAmount=0.1;
    //event deligation
    const formIntputChangeHandler=(e)=>{
        console.log(e.target.value);
    }
    return (
        <form className='new-expense__controls' onChange={formIntputChangeHandler}>
            <div className='new-expense__control'>
                <label for="title">Expense Title</label>
                <input type="text" id="title" />
            </div>
            <div className='new-expense__control'>
                <label for="amount">Expense Amount</label>
                <input type="number" id="amount" min={minAmount} step={stepAmount} />
            </div>
            <div className='new-expense__control'>
                <label for="date">Date</label>
                <input type="date" id="date" min={minDate} max={maxDate} />
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
export default ExpenseForm;