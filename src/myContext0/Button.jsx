import React, { useContext } from 'react'
import { countercontext } from './Context'

const Button = () => {
   let value= useContext(countercontext)
  return (
    <div>Button:{value}</div>
  )
}

export default Button