import React from 'react'
import Card from './Card';
// import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props) {

    // const ExpenseDate=new Date(2021,2,28);
    // const ExpenseName="Car Insurance";
    // const ExpensePrice=294.67
    const month=props.date.toLocaleString('en-US',{month:'short'})
    const day=props.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.date.getFullYear();

//  const clickHandler=()=>{
//      console.log('Buttton Clicked')
//  }

    return (
        // <div className="expense-item">
         <Card className="expense-item"> 
            {/* <div>{ExpenseDate.toISOString()}</div> */}
               
            {/* <ExpenseDate/> */}
              <div className="expense-date__formate">
              <div>{day}</div>
              <div>{month}</div>
              <div>{year}</div>
              </div>

            <div className="expense-item__description">
                {/* <h2>{ExpenseName}</h2> */}
                <h2>{props.title}</h2>
                {/* <div className="expense-item__price">${ExpensePrice}</div> */}
             <div className="expense-item__price">${props.amount}</div>
            </div>
              {/* </div> */}
              {/* <button onClick={clickHandler}>Title Change</button> */}
               </Card>
            
          
      
       
    );
}

export default ExpenseItem
