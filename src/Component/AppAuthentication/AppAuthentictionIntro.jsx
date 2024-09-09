import React from 'react'
import NavBar from './NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Service from './Service'
import Register from './Register'
import Loginn from './Loginn'
import Profile from './Profile'
import AllUsers from './AllUsers.jsx'
import Update from './Update.jsx'
import Delete from './Delete.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'

const AppAuthentictionIntro = () => {
    let routs=createBrowserRouter([
        {
            path:'/',
            element: <Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/service',
                    element:<Service/>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
                {
                    path:'/login',
                    element:<Loginn/>
                },
                {
                    path:'/alluser',
                    element:<AllUsers/>
                },
                {
                    path:'/profile',
                    element:  <ProtectedRoutes> <Profile/></ProtectedRoutes>
                },
                
                {
                    path:'/delete',
                    element:<Delete/>
                },
                {
                    path:'/update/:id',
                    element:<Update/>
                },
                {
                    path:'/*',
                    element:<Loginn/>
                },
            ]
        }
        

    ])
  return (
    <div>
        <RouterProvider router={routs}></RouterProvider>
       
    </div>
  )
}

export default AppAuthentictionIntro;
