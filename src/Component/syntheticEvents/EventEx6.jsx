import React from 'react'

const EventEx6 = () => {
    let handleScroll=(e)=>{
        e.target.style.background="grey"
    }
  return (
    <div>
      <p onScroll={handleScroll} style={{width:"400px",height:"400px",border:"2px solid",overflow:"auto", margin:"50px",padding:"20px"}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum vel labore sit obcaecati aliquam rerum illo ex itaque enim quas hic cumque minima, tempora eum ipsum consequatur in eos. Nesciunt odio rerum dolor optio alias sit repudiandae quas ea delectus autem sint, maxime rem corrupti. Natus ullam ratione nesciunt voluptatum, molestias totam assumenda architecto cumque perferendis quia soluta in distinctio dicta explicabo deleniti suscipit, corporis ut, sed voluptate odio? Temporibus corrupti, animi incidunt est unde doloribus nulla omnis consequuntur quidem, consectetur odit a blanditiis vel praesentium. Non, iure adipisci odio tempore quo magni iusto expedita? Vero ipsum sit nesciunt possimus?
        </p> 
    </div>
  )
}

export default EventEx6
