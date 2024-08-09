import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosEx1Get  = () => {
  let [dataa, setdata]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((Response)=>{setdata(Response.data)})

  },[])
  return (
    <div>
{
  dataa.map((val,i)=>{
    return(
      <div>
        <p>username:{val.name}</p>
      </div>

    )
  })
}
    </div>
  )
}

export default  AxiosEx1Get

// this is how to call Api