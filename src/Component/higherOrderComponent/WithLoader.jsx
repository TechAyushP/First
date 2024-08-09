import React, { useState } from 'react'
// accept with wrapped and pass the user component in previous component
const WithLoader = (Wrapped) => {
    let [state,setState]=useState(true);
  return ()=>{
    setTimeout(()=>{ 
        setState(false)

    },2000)
    return (
      <div>
         {state?<h1>Loading.............</h1>:<Wrapped/>}
      </div>
    )
  }
 
    
  
}

export default WithLoader