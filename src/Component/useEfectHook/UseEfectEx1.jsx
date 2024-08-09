import React ,{useEffect, useState}from 'react'

const UseEfectEx1 = () => {
    const [count1,setcount1]=useState(0)
    const [count2,setcount2]=useState(0)


    // useEffect(()=>{
    //     console.log("Hello EveryOne My Name is Ayush");
        
    // },[count])

    useEffect(()=>{
        console.log("use effect get executed because of change in state");
        
    }, [count1,count2])
  return (
    <div style={{height:"200px",width:"600px", backgroundColor:'gray'}}>UseEfectEx1 <br />
        <h1 style={{border:"1px solid black"}}>Count1:{count1}</h1> 
        <button onClick={()=>{setcount1(count1+1)}}  style={{border:"2px solid black"}}>Increment1</button>

        <h1 style={{border:"1px solid black"}}>Count2:{count2}</h1> 
        <button onClick={()=>{setcount2(count2+1)}}  style={{border:"2px solid black"}}>Increment2</button>
    </div>
  )
}

export default UseEfectEx1