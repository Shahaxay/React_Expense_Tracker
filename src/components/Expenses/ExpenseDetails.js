import './ExpenseItem.css'
import React,{useState} from 'react';
const ExpenseDetails = (props) => {
    const [title,setTitle]=useState(props.title);
    const [amount,setAmount]=useState(props.amount);
    const changeTitleHandler=()=>{
        setTitle("updated")
    }
    const changeAmountHandler=()=>{
        setAmount('$100');
    }
    return (
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <h2>{props.location}</h2>
            <div className='expense-item__price'>{amount}</div>
            <button onClick={changeTitleHandler}>Change Title</button>
            <button onClick={changeAmountHandler}>Change Amount</button>
        </div>
    );
}

export default ExpenseDetails;