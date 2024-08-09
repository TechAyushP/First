import React, { useState } from 'react'

const UseStateEx1 = () => {
    let [count,setcount]=useState(0)
    
    let handleInc=()=>
        setcount (count+1)
    let handleDec=()=>
        setcount (count-1)
    let reset=()=>
        setcount (count=0)

  return (
    <div className='flex gap-5 bg-slate-200'>
     <h1>count: {count}</h1>
        <button  onClick ={handleInc}   className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Increment</button>

        <button onClick={handleDec} className="gap-10 px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 gap-x-8 gap-y-4" flex>Decrement </button>
     <button onClick={reset} className=''>Reset</button>

    </div>
  )
}

export default UseStateEx1
