import React, { useState } from 'react'

const ToDo = () => {
  let [input,setInput]=useState('');
  let [arr,setArr]=useState([])
  const handle=()=>{
    setArr([...arr,input])

  }
  const handledelete=(i)=>{
    const res=arr.filter((val,ind)=>{
      return i!==ind;
    })
    setArr(res);
  }
  return (
    <div>
      <h1>To do List</h1>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handle}>Submit</button>

      <div>
        {
          arr.map((val,i)=>{
            return(
              <h1>{val}<button onClick={()=>handledelete(i)}>Delete</button></h1>
            )
          })
        }
      </div>
    </div>
  )
}

export default ToDo