import React, { useState } from 'react'

const ChildLifting = (props) => {
    let [name,setname]=useState()
    const handlechange=(e)=>{

        setname(e.target.value)


    }
    let handlesubmit=(e)=>{
        e.preventDefault();
        props.getData(name)  //
        console.log(props)

    }
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" style={{border: "2px solid black"}} value={name} onChange={handlechange} />
            <button style={{border: "2px solid black"}}>Submit</button>
        </form>

      
    </div>
  )
}

export default ChildLifting
