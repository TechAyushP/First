import React from 'react'
import { memo } from 'react';

const Child = ({display}) => {
    console.log('i am display');
    
  return (
    <div>
      
    </div>
  )
}

export default memo(Child)
