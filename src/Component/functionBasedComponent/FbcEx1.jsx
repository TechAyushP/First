import React, { useState } from 'react' 

export const FbcEx1 = () => {
    const [count ,setcount]= useState(0)
        let handleInc=()=>
            setcount(count + 1)

        let decrementCount=()=>{
            setcount (count-1)
        }


    
  return (
    <div>
        <h1>count: {count}</h1>
        <button  onClick ={handleInc}   className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Increment</button>

        <button onClick={decrementCount} className="gap-10 px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 gap-x-8 gap-y-4" >Decrement </button>
        
    </div>
  )
}
export default FbcEx1