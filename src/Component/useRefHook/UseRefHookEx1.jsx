import React, { useRef } from 'react'

const UseRefHookEx1 = () => {
    let myDiv=useRef()
    let handleClick=()=>{
myDiv.current.style.background='red'
    }
  return (
    <div>

        <section ref={myDiv} style={{display: "flex"}}>
        <div style={{width:"200px",height:"200px",border:"10px solid"}}></div>
        <div style={{width:"200px",height:"200px",border:"10px solid"}}></div>
        <div style={{width:"200px",height:"200px",border:"10px solid"}}></div>

        </section>
        <button className='border-2 border-black' onClick={handleClick}>Submit</button>

    </div>
  )
}

export default UseRefHookEx1