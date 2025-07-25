import React,{useState} from 'react'

export default function PracticeONchange() {

    const[Name,setName]=useState("Guest")

    const[Quantity,setQuantity]=useState(0);

    const[Comment,setComment]=useState("");

    const Change=(event)=>
        setName( event.target.value);


    const Quantitys=(event)=>
        setQuantity( event.target.value);
        
    const Comments=(event)=>
        setComment( event.target.value);
       
  return (
    <div>
        <input className='buttons' value={Name} type="text"  onChange={Change}/>
        <h2>Name: {Name}Welcome to our React js</h2>
         <input className='buttons' value={Quantity} type="number"  onChange={Quantitys}/>
        <h2>Quantity: {Quantity}</h2>
           <select value={Comment} onChange={Comments}>

            <option value="Mastercard">Mastercard</option>
            <option value="giftcard">giftcard</option>
            <option value="visa">visa</option>
            <option value="creditcard">creditcard</option>

           
         </select>
         <h2>Payment: {Comment}</h2>
         
    </div>
  )
}


