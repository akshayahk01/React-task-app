import React from 'react'
import Myheart from './myheart.jpg'; 

export default function Picture() {

   // const Picture= 'src/myheart.jpg'//
    const Pic=(e)=> e.target.style.display="none";
  return (
    <div>
        <img  className='Picture' onClick={(e)=> Pic(e)} src={Myheart} alt="pic"   />
      
    </div>
  )
}
