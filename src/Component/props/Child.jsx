import React from 'react'
import Child1 from './Child1';

const Child = (props) => {
  return (
    <div>
        <Child1 props={props}/>
    </div>
  )
}

export default Child
