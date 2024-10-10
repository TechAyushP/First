import { list } from 'postcss'
import React, { useState } from 'react'

const CrudEx1 = () => {
    let [state,setstate]=useState({
        username:"",
        password:"",
        list:[]
    })
    let {username,password}= state
    let handlechange =(e)=>{
      let {name,value}=e.target
      setstate({...state,[name]:value})
      

    }
    let handlesubmit=(e)=>{
      e.preventDefault();
      let obj={
        username:state.username,
        password:state.password
      }

      setstate({username:'', password:'', list:[...state.list,obj]})

    }

  return (
    

  <div >
<div>
<form action="">
<input style={{border:"2px solid black"}} type="text"  name='username'  value={username} onChange={handlechange}/> <br /> <br />
<input style={{border:"2px solid black"}} type="text"  name='password' value={password}   onChange={handlechange}/> <br /> <br />
<button onClick={handlesubmit}>submit</button>
</form>
</div>


<div>
{state.list.length>0 && state.list.map((val,i)=>{
  return(
    <div key={i}>
      <h1>username:{val.username}</h1>
      <p>password:{val.password}</p>

    </div>
  )
})}
</div>
  </div>
  )
}

export default CrudEx1