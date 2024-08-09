import React, { useRef } from 'react'

const UseRefHookEx2 = () => {
    let mynav=useRef();
    let myGreen=useRef();
    let myBlue=useRef();
    let myOrange=useRef();
    let myFooter=useRef();

    const handlePink=()=>{
        mynav.current.style.background='pink'
    }
    const handleGreen=()=>{
        myGreen.current.style.background='green'
    }
    const handleBlue=()=>{
        mynav.current.style.background='blue'
    }
    const handleOrange=()=>{
        mynav.current.style.background='orange'
    }
    const handleRed=()=>{
        mynav.current.style.background='red'
    }
    
   
  return (
    <div>UseRefHookEx2
        <nav  ref={mynav}  onClick={handlePink}style={{display: "flex",height:"15vh",background:"gray",justifyContent:"space-around",alignItems:"center"}}>
            
        </nav>
        <main   style={{display: "flex",height:"65vh",background:"gray",justifyContent:"space-around",alignItems:"center"}}>
            <div ref={myGreen} onClick={handleGreen} style={{width:"100%", height:"100%",background:"orange"}}></div>
            <div ref={myBlue} onClick={handleBlue} style={{width:"100%", height:"100%",background:"yellow"}}></div>
            <div  ref={myOrange}onClick={handleOrange} style={{width:"100%", height:"100%",background:"red"}}></div>
</main>
        <footer ref={myFooter}  onClick={handleRed} style={{display: "flex",height:"5vh",background:"green",justifyContent:"space-around",alignItems:"center"}}></footer>
    </div> 
  )
}

export default UseRefHookEx2