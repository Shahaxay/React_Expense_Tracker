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
  // console.log(expenses);

  /* applying filter concept*/

  const [selectedYear,getSelectedYearExpenses]=useState("2020");

  const filteredExpenses=expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===selectedYear;
  })
  // console.log(filteredExpenses);

  const filterChangedHandler=(year)=>{
    getSelectedYearExpenses(year);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler}/>
      <Expenses expenses={filteredExpenses} onFilterChanged={filterChangedHandler}/>
    </div>
  );
}

export default App;
