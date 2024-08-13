import React from 'react'
import Hoc from './Hoc'

const Card = (x) => {
    console.log(x);
    
  return (
    <div>
      <h1>i am card com prompt</h1>
    </div>
  )
}

export default Hoc(Card)
