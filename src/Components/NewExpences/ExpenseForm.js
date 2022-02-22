
import React, { useState } from "react"
import './ExpenseFrom.css'
const ExpenseForm = (props) => {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');


    const titleChangeHandler = (event) => {
        // console.log(event.target.value)
        setEnterTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        //   console.log(event.target.value)
        setEnterAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        // console.log(event.target.value)
        setEnterDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };
        // console.log(expenseData);
        props.onSaveExpenseDate(expenseData)
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    };  
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label> <br />
                    <input type='text' onChange={titleChangeHandler} value={enterTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label><br />
                    <input type='text' min='0.01' step='0.01' onChange={amountChangeHandler}  value={enterAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label><br />
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={enterDate}></input>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancle}>Cancle</button>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
               
            </div>
        </form>
    )
}
export default ExpenseForm