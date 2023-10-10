import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const defaultExpense=[
    { id: '1', title: "Laptop", location: 'flipkart', amount: '80000', date: new Date(2020, 9, 18) },
    { id: '2', title: "Headphone", location: 'Myntra', amount: '5000', date: new Date(2021, 9, 18) },
    { id: '3', title: "Microphone", location: 'flipkart', amount: '1000', date: new Date(2022, 9, 18) },
    { id: '4', title: "Harddisk", location: 'Amazon', amount: '8000', date: new Date(2023, 9, 18) },
  ];
  const [expenses,updateExpensesOnScreen] = useState(defaultExpense);
  const addExpenseDataHandler=(expense)=>{
    console.log(expense);
    const updatedExpense=((prevExpenses)=>{return[...prevExpenses,expense]});
    // console.log(updatedExpense);
    updateExpensesOnScreen(updatedExpense);
  }
  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={addExpenseDataHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
