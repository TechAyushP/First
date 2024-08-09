import React, { useState } from 'react'
import { useMemo } from 'react'

const UseMemoIntor = () => {
    let [count1,setcount1]=useState(0)
    let [count2,setcount2]=useState(0)
   let Problem= useMemo(() =>{
        let i=0
        while(i<100000000){
            i++
        }
        console.log("Problem FunctionExecuted after While loop");

        
        return "Check console" //  jo return hota us string ya no memoised khte h
    },[count2]) // dependencie count2 pe pass kari h tbhi console hoga   count1 pe console n hoga

  return (
    <div>

<button onClick={()=>{setcount1(count1+1)}}>Increment1 {count1} {Problem}</button> <br />
<button onClick={()=>{setcount2(count2+1)}}>Increment2 {count2} {Problem}</button> <br />
    </div>
  )
}

export default UseMemoIntor