
import React from 'react'

export default function ClickEvent() {
 
    

    // const handle2=(name)=> {
       
    //     if (count<3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count}times/s`)
            
    //     }
    //     else{
    //         console.log("stop clicking me ")
    //     }
    // }

    const handle2 = (e)=>{
        e.target.textContent="welcome coder";
    }
  return (
    <div>



        <button onClick={(e)=>handle2(e)}>click me to show your name</button>

      
    </div>
  )
}
