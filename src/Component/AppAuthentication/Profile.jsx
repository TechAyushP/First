import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const nevigate=useNavigate()
  // useEffect(()=>{
  //   const op=sessionStorage.getItem("token")
  //   if (!op){
  //     return(
  //       nevigate('/login')

  //     )
  //   }
    

  // },[])
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Welcome to Your Profile</h1>
    </div>
  )
}

export default Profile
