
import React , {useState}from 'react';
// import ExpenseItem from './Components/ExpenseItem';
import './App.css'
import Card from './Components/Card';
import Expences from './Components/Expences/Expences';
import NewExpence from './Components/NewExpences/NewExpence';

// const Expenses = [
const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021,2,28)
  },
  {
    id:'e2',
    title: 'Toilet Paper',
    amount: 600,
    date: new Date(2021,2,12)
  },
  {
    id:'e3',
    title: 'Brush',
    amount: 900,
    date: new Date(2021,2,25)
  },
  {
    id:'e4',
    title: 'Vegitables',
    amount: 500,
    date: new Date(2021,2,5)
  },
  {
    id:'e5',
    title: 'Vaibhav',
    amount:3000,
    date: new Date(2022,2,5)
  }
]

function App() {
  const[Expenses,setExpenses]=useState( DUMMY_EXPENSES)
  
  const addExpenseHandler=(expense)=>{
    // console.log(expense);
    // console.log('app.js');
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  };
 
  return (
    // <div className="App">
      <Card className="App">
      <NewExpence onAddExpense={addExpenseHandler}/>
      <Expences items={Expenses}/>
       
    {/* </div> */}
    </Card>
  );
}

export default App;
