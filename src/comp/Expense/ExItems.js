// import '../index.css';
import './Exitem.css';
import React,{useState} from 'react';
import Date from './Date';
import Card from '../UI/Card';

const ExItems=(prop)=>{
    // let title=prop.title;
    const [valinput, setValinput]=useState("Say hello");
     const changeHandler=(event)=>{
        setValinput(event.target.value)

     }

   const [title,setTitle]=useState(prop.title);
    const click=()=>{
    //   title=prompt("Enter Your New Title Here");
    //   console.log(title);
    // prompt("Enter Your New Title Here")
        setTitle(valinput);
        // changeHandler();

    }
 return(
     <Card className='expense-item'>
  <Date date={prop.date} />
     <div className='expense-item__description'>
         <h2>{title}</h2>
         <div className='expense-item__price'>${prop.amount}</div>
     </div>
     <input onChange={changeHandler} className='input-field' placeholder='Enter Your Input Here' value={valinput} text="text"/>
     <button className='expense-button' onClick={ click }>Change-Title</button>
     </Card>
 );
}

export default ExItems;