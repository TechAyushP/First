import React from 'react'
import { useReducer } from 'react';



const UseReducerBasic = () => {
  let initialstate=10;

const reducer=(state,action)=>{
  switch (action) {
    case 'increment':
      return initialstate+1 
      
      case 'decrement':
      return state-1 
      
  
    default: 
    return  state=0
      
  }

}
const [state,dispatch]=useReducer(reducer,initialstate)

  // it is like usestate opposite
  // let [state,setstate]=useState('initial value')



  return (
    <div>
      <div>count:{state}</div>
      <button onClick={()=>{dispatch('increment')}}> Increment</button>
      <button onClick={()=>{dispatch('decrement')}}> Decrement</button>

    </div>
  )
} 

export default UseReducerBasic