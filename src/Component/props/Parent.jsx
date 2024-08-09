import React from 'react'
import Child from './Child'
import Child from './../DefaultProps/Child';

const Parent = () => {
    let car ='fortuner'
    let bike ='splender'

  return (
    <div>
        <Child props={{car,bike}}/>
    </div>
  )
}

export default Parent
