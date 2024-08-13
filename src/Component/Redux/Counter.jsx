import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './ReduxApp'
const Counter = () => {
  let count=useSelector((state)=>state.counter.count) //explicit return
console.log(count);
let dispatch=useDispatch();
let incrementcount=()=>{
  dispatch(increment('hello'))

}
let decrementcount=()=>{
  dispatch(decrement('byee'))
}
  

  return (
    <div>
      <h1>counter ={count}</h1>
      <button onClick={incrementcount} style={{border:'2px solid black'}}>Increment</button>
      <button onClick={decrementcount} style={{border:'2px solid black'}}>Decrement</button>
      
    </div>
  )
}

export default Counter
