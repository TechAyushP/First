import React from 'react'
import Hoc from './Hoc'

const Footer = (x) => {
    console.log(x);
    
  return (
    <div>
      <h1> i am footer comp</h1>
    </div>
  )
}

export default Hoc(Footer)
