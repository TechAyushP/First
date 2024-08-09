import React, { useState } from 'react'
import { createElement } from 'react';
import { createContext } from 'react';
export let contextVariable= createContext()
const MyContext = (props) => {
 console.log(props);
    let a=10;
    let  [count,setcout] =useState(0)
  return (
 <contextVariable.Provider value={{a,count,setcout}}>{props.children}</contextVariable.Provider>

  )
}

export default MyContext    
// is one of the state management tool which introduce in react after 16.3 version
//context api is also avoid props drilling

//it is for my context hook  main me jake 

  //  <MyContext>
  //   <App />
  //  </MyContext>
4