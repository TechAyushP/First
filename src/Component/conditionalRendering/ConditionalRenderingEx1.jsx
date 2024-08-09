import React, { useState } from 'react'
import Home from './Home'

const ConditionalRenderingEx1 = () => {
    const [state,setState]=useState(false)

  return (
    <div>
        <nav style={{width:"100vw",height:"15vh",background:"gray",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <div>Logo</div>
        <div>Home</div>
        <div>About</div>
        <div>Content</div>
        <button onClick={()=>{setState(!state)}} >{state ? "Logout":"Login"}</button>
        </nav>
        {state ? <Home/>: ""}
        {/* {state== false && <Home/>} */}
    </div>
  )
}

export default ConditionalRenderingEx1