import React from 'react'
import WithLoader from './WithLoader';
import User from './User';


const HigherOrderIntro = () => {
    let UserWithLoader=WithLoader(User);
  return (
    <div>
        <UserWithLoader/>
        

    </div>
  )
}

export default HigherOrderIntro