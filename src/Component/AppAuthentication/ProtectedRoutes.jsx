import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {

    const op=sessionStorage.getItem('token')
    
  return (
    <div>
      {op? <>{children}</>: <Navigate to='/login'/> }
    </div>
  )
}

export default ProtectedRoutes

