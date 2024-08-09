import React, { useEffect, useState } from 'react'


const UseEfectEx2 = () => {


    useEffect(()=>{
fetching()
    })

    const [count,setcount]=useState(0)
    let [data,setdata]=useState([])
    let fetching= async()=>{
        let response= await fetch("https:/api.github.com/users")
        let apidata= await response.json()
        console.log(apidata);
        setdata(apidata)

    }
  return (
    <div>
<button style={{border:"2px solid black"}} onClick={()=>{setcount(count+1)}}>count:{count}</button>
<div style={{display:"flex",flexWrap:"wrap"}}>{
    data.length>0 && data.map((val,i)=>{
        return(
            <div style={{margin:"10px"}} key={i}>
                <h1>{val.login}</h1>
                <img src={val.avatar_url} alt="" width="200px" />
            </div>
        )
    })
}</div>
    </div>
  )
}

export default UseEfectEx2