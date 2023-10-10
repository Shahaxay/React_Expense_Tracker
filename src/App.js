import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES=[
  { id: '1', title: "Laptop", location: 'flipkart', amount: '80000', date: new Date(2020, 9, 18) },
  { id: '2', title: "Headphone", location: 'Myntra', amount: '5000', date: new Date(2021, 9, 18) },
  { id: '3', title: "Microphone", location: 'flipkart', amount: '1000', date: new Date(2022, 9, 18) },
  { id: '4', title: "Harddisk", location: 'Amazon', amount: '8000', date: new Date(2023, 9, 18) },
];
const App = () => {
  const [expenses,updateExpensesOnScreen] = useState(DUMMY_EXPENSES);
  const addExpenseDataHandler=(expense)=>{
    // console.log(expense);
    updateExpensesOnScreen(prevExpenses=>{return[expense,...prevExpenses]});
  }
  console.log(expenses);
  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={addExpenseDataHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
