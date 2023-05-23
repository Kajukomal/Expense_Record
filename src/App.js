
import Expenses from './components/Expenses/Expenses.js'
import NewExpense from './components/NewExpense/NewExpense.js'
import {useState} from 'react'

const default_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  //To display expenses list on screen
  const [expense,setExpense]=useState(default_expenses)

  //Function to render the list when a new item is added
  function newExpenseHandle(userInput){
  setExpense(prev=> {
  return [userInput,...prev]
   })
}
  return <div>
         <NewExpense onAddExpense={newExpenseHandle}/>
         <Expenses items={expense}/>
        </div>    
} 

export default App;
