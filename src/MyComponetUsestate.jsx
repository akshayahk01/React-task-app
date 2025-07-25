import React,{useState} from 'react'

export default function MyComponetUsestate() {


    const [name,setName]=useState();
    const [age,setAge]=useState(0);

    const Update=()=>{
        setName("Akshay");
    }

    const Updateage=()=>{

        
        setAge(age+1);
    }
  return (
    <div>
        <h2>
              Name={name} welcome to our reactjs i think your enjoying
        </h2>
        <button onClick={Update}>Update the name</button>
           <h2>
              age={age}
        </h2>
        <button onClick={Updateage}>Update the age</button>
      
      
    </div>
  )
}
