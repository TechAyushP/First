import React, { useMemo, useState } from 'react'

const Usecallback = () => {
    let [count1,setcount1]=useState(0)
    let [count2,setcount2]=useState(10)
    let multiply=useMemo(()=>{
        console.log('*****************************');
        return count1*20;
        

    },[count1])
    // let display=Usecallback(()=>{
    //     console.log('i am display function');
        

    // },[])

  return (
    <div>
     
     <h1>Count1:{count1}</h1>
     <h1>multiply={multiply}</h1>
     <button  style={{border:'1px solid black'}} onClick={()=>{setcount1(count1+1)}}>increment1</button>
     <br />
     <hr /> 
     <h1>Count2:{count2}</h1>
     <button style={{border:'1px solid black'}} onClick={()=>{setcount2(count2+10)}}> increment2</button>
     {/* <Child display={display}></Child> */}
    </div>
  )
}

export default Usecallback
