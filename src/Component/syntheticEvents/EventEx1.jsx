import React from 'react'

const EventEx1 = () => {
    let handleClick= (e)=>{
        e.target.style.width="200px"
    }
    let handleInput= (e)=>{
        
        console.log(e.target.style);
        e.target.style.background="gray"
        e.target.style.width="200px"
        e.target.style.height="200px"

    }
    
  return (
    <div>
      <button  onMouseOver ={handleClick}   className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">CLick</button>
      <input type="text" onMouseOver={handleClick} className='border-2 border-black' />
    </div>
  )
}

export default EventEx1
