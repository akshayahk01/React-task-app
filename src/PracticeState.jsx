import React,{useState} from 'react'

export default function PracticeState() {


    const[Car,setCar]=useState({year:2024,
                                Make:"Toyota",
                                model:"creata",

    })

    function HandleChangeYear(event){
        setCar({...Car,year:event.target.value})
      

    }
     function HandleChangeMake(event){
      
         setCar({...Car,Make:event.target.value})

    }
     function HandleChangeModel(event){
      

    }








  return (
    <div>
        <h2>list of car:{Car.year} {Car.model}  {Car.Make}</h2>

        <input type="number" value={Car.year} onChange={HandleChangeYear} />
        <input type="text" value={Car.model} onChange={HandleChangeModel} />
        <input type="text" value={Car.Make} onChange={HandleChangeMake} />
        
      
    </div>
  )
}

