import { func, number } from "prop-types"
import { useState } from "react"
import React from 'react'

export default function UpdateArrayState() {

    const[Foods,setFoods]=useState(["banana", "mango", "pizza",])

    function AddFood() {
        const NewFood= document.getElementById('add').value
        document.getElementById('add').value=""
    
        if (NewFood ===" "|| !isNaN(NewFood)) {
            alert("Please add valid food");
            return;
            
        }

       
        setFoods([...Foods,NewFood])
    }

    function RemoveFood(index) {
        setFoods(Foods.filter((_,i)=> i !== index))
        
    }
  return (
    <div>


        <h2>list of the foods </h2>
        <ul>
             {Foods.map((food,index)=><li key={index} onClick={()=>RemoveFood(index)}>{food.charAt(0).toUpperCase() +food.slice(1)  }</li>)}
        </ul>
        <input type="text" id="add" placeholder="Write to add" />

        <button className= 'buttons' onClick={AddFood}>ADDFood</button>
      
    </div>
  )
}
