import React from 'react'
import ChildLifting from './ChildLifting'


const LiftingProps = () => {
    const getData=(data)=>{
        console.log(data ,' child se data mil ra h');
        

    }

  return (
    <div>LiftingProps

<ChildLifting getData={getData}/>

    </div>

  )
}

export default LiftingProps
