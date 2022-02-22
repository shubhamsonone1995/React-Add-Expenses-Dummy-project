import React,{useState} from "react"
import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm"

const NewExpence=(props)=>{
    const[isEditing,setIsEditing]=useState(false)
    
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHander=()=>{
        setIsEditing(true);
    };
    const stoptEditingHander=()=>{
        setIsEditing(false);
    };
    return( <div className="new_Expenses">
    {/* we have to pass a props to ExpenseForm Component so that we define props on ExpenseForm component */}

   {!isEditing && <button className="add_new_expenses_betton" onClick={startEditingHander}>Add New Expense</button>}
    {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} 
    onCancle={stoptEditingHander}/>}
    </div>)
}
export default NewExpence