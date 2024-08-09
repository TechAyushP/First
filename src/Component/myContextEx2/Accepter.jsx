import React, { useContext } from 'react'
import MyContextEx, { contextVariableEx } from './MyContextEx'

const Accepter = () => {
    let res=useContext(contextVariableEx);
    console.log(res);
  return (
    <div>
        {
          res.map((val, i)=>{
            return(
              <div style={{height:"100px",width:"600px",backgroundColor:"gray"}}>
                <li>{val.url}</li>
                <img style={{height:"20px",width:"20px"}} src={val.avatar_url} alt="" />

              </div>
            )
          })
        }
    </div>
  )
}

export default Accepter