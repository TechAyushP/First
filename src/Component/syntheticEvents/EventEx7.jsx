import React from 'react'

const EventEx7 = () => {
    window.addEventListener('mousemove' ,()=>{
        console.log(event.clientX,event.clientY);
    })
  return (
    <div>
<h1>EventEx7</h1>
    </div>
  )
}

export default EventEx7