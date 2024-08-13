import React from 'react'
import NavBar from './NavBar'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Toaster></Toaster>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
