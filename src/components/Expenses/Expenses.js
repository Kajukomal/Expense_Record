import React,{useState} from 'react'
import './expenses.css'
import ExpenseFilter from './ExpenseFilter.js'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpenseChart'

function Expenses(props){
       const[filterYear,setFilter]=useState('2020')//default year filter

        function filterHandler(year){
           setFilter(year)
            }

        const filteredExpense=props.items.filter(expense=>{
               return expense.date.getFullYear().toString()===filterYear
             })

    return  <div className='expenses'>
                  <ExpenseFilter selectedYear={filterYear} onFilter={filterHandler} />
                  <ExpensesChart expenses={filteredExpense}/>
                  <ExpensesList items={filteredExpense}/>
            </div>
}
    
   export default Expenses;