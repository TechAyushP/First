import React, { useState } from 'react'

const EventEx3 = () => {
    let [state,setstate]=useState("")
    let [surname,setSurname]=useState("")
    let hadleChange=(e)=>{
        console.log(e.target.value);
        setstate(e.target.value)
    }
    let  handleSurname=(e)=>{
        console.log(e.target.value);


        setSurname(e.target.value)
    }
    
    
  return (
    <div>
      <input type="text"onChange={hadleChange} className='border-2 border-black'/>
      <input type="text"onChange={handleSurname} className='border-2 border-black'/>
      <h1>State: {state}</h1>
      <h1>Surname: {surname}</h1>


    </div>
  )
}

export default EventEx3
