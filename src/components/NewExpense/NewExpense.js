import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props){
    const [edit,setEdit]=useState(false)

    function onSaveHandle(userInput){
          const data= {...userInput, id:Math.random().toString()}
          props.onAddExpense(data)
          setEdit(false)
    } 

    function handleClick(){
      setEdit(true)
    }

    function cancelEditingHandler(){
      setEdit(false)
    }

    return <div className='new-expense'>
     {!edit?<button onClick={handleClick}>Add New Expense</button>: <ExpenseForm onSave={onSaveHandle} onCancel={cancelEditingHandler}/>} 
     
    </div>
    
}
export default NewExpense;