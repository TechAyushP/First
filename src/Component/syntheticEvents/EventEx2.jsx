import React from 'react'

const EventEx2 = () => {
    let handleENter=(e)=>{
        e.target.style.background="red"

    }
    let handleLeave=(e)=>{
        e.target.style.background="yellow"
        
    }
  return (
    <div style={{display:'flex',flex:'wrap'}}>
<div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>
</div>

<div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>

</div><div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>

</div><div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>

</div><div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>

</div><div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>

</div><div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>

</div><div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>

</div><div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>

</div><div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>

</div><div style={{width:'100px',height:'100px',border:'1px solid black'}} onMouseEnter={handleENter} onMouseLeave={handleLeave}>

</div>
    </div>
  )
}

export default EventEx2