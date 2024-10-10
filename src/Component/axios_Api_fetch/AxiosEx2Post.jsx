import axios from 'axios'
import React, { useState } from 'react'

const AxiosEx2Post = () => {
  let data={
    username:'' ,
    password:''
  }
  let [input,setinput]=useState(data)
  let handlechange=(e)=>{
    let {name,value}=e.target
    setinput({...input,[name]:value})

  }
  let handlesubmit=(e)=>{
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users',input)
    .then((Response)=>{
      console.log(data.Response);
    })
  }
  return (
    <div>
     <form action="">
      <input type="text" name='username' value={input.username} onChange={handlechange} placeholder='Username' />
      <input type="text" name='password' value={input.password} onChange={handlechange} placeholder='password' />
      <button onClick={handlesubmit}>Submit</button>
     </form>
    </div>
  ) 
}

export default AxiosEx2Post