import './Cards.css'
function Card(props){
   
    return <div className='expense-item card'>{props.children}</div>
}

export default Card;