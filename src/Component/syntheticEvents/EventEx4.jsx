import React, { useState } from 'react'

const EventEx4 = () => {
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
    let handleSubmit =(e)=>{
        e.preventDefault()
    }
  return (
    <div >
      <form action="" onSubmit={handleSubmit} >
      <input type="text"onChange={hadleChange} className='border-2 border-black'/> 
      <input type="text"onChange={handleSurname} className='border-2 border-black'/>
      <button className='border-2 border-black'>Submit</button>
      </form>
      <h1>Name:{state}</h1>
      <h1>Surname:{surname}</h1>


    </div>
  )
}

export default EventEx4
