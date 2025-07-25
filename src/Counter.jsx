import React,{useState} from 'react'

export default function Counter() {

    const[Count,setCount]=useState(0);

    const Incriment=()=>{
        setCount(Count+1)
    }
    const Decriment=()=>{
        setCount(Count-1)
    }
    const Reset=()=>{
        setCount(0)
    }
  return (
    <div  className='container'>
        <h2>{Count}</h2>
        <button className='buttons'onClick={Incriment}>Incriment</button>
        <button className='buttons' onClick={Decriment}>Decriment</button>
        <button className='buttons' onClick={Reset}>Reset</button>
      
    </div>
  )
}
