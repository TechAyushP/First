import React, { useState } from 'react'

const UseStateEx2 = () => {
    let [toggle,settogglee]=useState(false)
    let handleTogle= ()=>{
        settogglee(!toggle)
    }
  return (
    <div className='w-screen h-screen bg-slate-200 place-content-center'>
      <button  onClick ={handleTogle}   >{toggle ? "On": "off"} </button>
    </div>
  )
}

export default UseStateEx2
