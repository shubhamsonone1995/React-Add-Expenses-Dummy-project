import React, { useState } from "react"
import ExpenseItem from "../ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
function Expences(props) {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    // console.log('expenses.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  const filteredExpenses=props.items.filter(expense=>
    {
    console.log(expense)
    return expense.date.getFullYear().toString() === filteredYear;
     
  });

  let expenseContent=<p>No items  Found for these year </p>;

  if(filteredExpenses.length > 0){
    expenseContent= filteredExpenses.map((expense) =>( 
      <ExpenseItem 
         key={expense.id}
         title={expense.title}
         amount={expense.amount} 
         date={expense.date} 
      />
      )
      )
  }
  // for conditional rendering we use variable apporoch ,we can define variable and assign a value to that variable and if condition 

  return (
    <div>
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler} 
      />
      {expenseContent}

      {/* {props.items.map((expense) =>(  */}
      {/* {filteredExpenses.length === 0 && <p>No items  Found for these year</p>}
      {filteredExpenses.length > 0 && 
        filteredExpenses.map((expense) =>( 
      <ExpenseItem 
          key={expense.id}
          title={expense.title}
         amount={expense.amount} 
         date={expense.date} 
         />)
       
      )} */}
        {/* we use conditional rendiring here for list */}

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}>
      </ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}>
      </ExpenseItem> */}
    </div>
  )

}
export default Expences