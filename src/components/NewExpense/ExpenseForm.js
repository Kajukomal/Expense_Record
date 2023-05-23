import './ExpenseForm.css'
import {useState} from 'react'

function ExpenseForm(props){
const [userInput,setUserInput]=useState({
    title:'',
    amount:'',
    date:''
});

    function handleChangeTitle(event){
        setUserInput((prev)=>{return {...prev, title:event.target.value}})
    }

    function handleChangeAmount(event){
        setUserInput((prev)=>{return {...prev, amount:event.target.value}})        
     }

     function handleChangeDate(event){
        setUserInput((prev)=>{return {...prev, date:event.target.value}})
     }

     function formSubmitHandle(event){
     event.preventDefault();

     props.onSave({ 
        title:userInput.title,
        amount:+userInput.amount,
        date:new Date(userInput.date)})

     setUserInput({
        title:'',
        amount:'',
        date:''
     })
     }   
     
    return   <form onSubmit={formSubmitHandle}>
                   <div className='new-expense__controls'>

                        <div className='new-expense__control'>
                           <label>Title</label>
                                <input
                                    type='text'
                                    value={userInput.title}
                                    onChange={handleChangeTitle}
                                 />
                         </div>

                       <div className='new-expense__control'>
                          <label>Amount</label>
                                <input
                                   type='number'
                                   min='0.01'
                                   step='0.01'
                                   value={userInput.amount}
                                   onChange={handleChangeAmount}
                                />
                        </div>

                      <div className='new-expense__control'>
                          <label>Date</label>
                                <input
                                   type='date'
                                   min='2019-01-01'
                                   max='2022-12-31'
                                   value={userInput.date}
                                   onChange={handleChangeDate}
                               />
                       </div>
    </div>

    <div className='new-expense__actions'>
         <button type='submit'>Add Expense</button>
         <button type='button' onClick={props.onCancel}>Cancel</button>
    </div>
    
  </form>
}

export default ExpenseForm;