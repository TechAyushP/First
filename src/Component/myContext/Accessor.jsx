import React, { useContext } from 'react'
import { contextVariable } from './MyContext'

const Accessor = () => {
    let data=useContext(contextVariable)
    console.log(data);
  return (
    <div>
        <h1>count:{data.count}</h1>
        <button onClick={()=>{data.setcout(data.count+1)}}>Increment</button> <br />
        <button onClick={()=>{data.setcout(data.count-1)}}>Decrement</button> <br />
        <button onClick={()=>{data.setcout(data.count=0)}}>Reset</button>

    </div>
  )
}

export default Accessor
