import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Api = () => {
    let[state,setState]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            console.log(response.data);
            setState(response.data)

        })

    },[])
  return (
    <div>
        <h1>Fetching the api with axios</h1>
        {
            state.map((val,i)=>{
                return(
                    <div key={i}>
                        <h1>Name :{val.name}</h1>
                        <h2>Id: {val.id}</h2>
                    </div>
                )
            })
        }

        

    </div>
  )
}

export default Api