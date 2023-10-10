import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseObj)=>{
        const expenseData={
            id:Math.random().toString(),
            ...enteredExpenseObj,
        }
        props.onAddExpense(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;