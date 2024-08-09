import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Contact = () => {
    const location=useLocation();

    // home se id bheji thi yaha accept kar li 
    console.log(location.state);
  return (
    <div>
        contact  hi i am contact page my id is {location.state.id}
        <br />
                

    </div>
  )
}

export default Contact