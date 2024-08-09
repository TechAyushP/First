import React, { useReducer } from 'react'

const UseRedEx1 = () => {
    let initialState={
        count:0

    }
    // reducer function always use switch case
     let  reducerFun=(state,action)=>{
    switch (action.type) {
        case "increment": return {count: state.count+1} ;break;
        case "decrement": return {count: state.count-1} ;break;
        case "reset": return {count: state.count=0} ;break;
    
        default:
            break;
    }

    }

    const [state,dispatch]=useReducer(reducerFun,initialState) 
    console.log(state.count);
  return (
    <div>
        <h1 >state:{state.count}</h1> <br />
        <div >
        <button onClick={()=>{dispatch({type:"increment"})}}> Increment</button> <br />
        <button onClick={()=>{dispatch({type:"decrement"})}}> Decrement</button><br />
        <button onClick={()=>{dispatch({type:"reset"})}}> Reset</button>

        </div>
       
    </div>
  )
}

export default UseRedEx1