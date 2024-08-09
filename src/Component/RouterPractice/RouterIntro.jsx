import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'

const RouterIntro = () => {
    let router=createBrowserRouter(
        [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/About',
                element:<About/>
            }

        ]
    )
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default RouterIntro
