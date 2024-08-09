import React from 'react'

const EventEx5 = () => {
    let handlekeyDown=(e)=>{
e.target.style.width="100vw"
    }
  return (
    <div>

        <input type="text" onKeyDown={handlekeyDown} className='border-2 border-black'/>
   
    </div>
  )
}

export default EventEx5
