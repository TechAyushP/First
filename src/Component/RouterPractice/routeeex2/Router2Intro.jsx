import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Router2Intro = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
  )
}

export default Router2Intro

// main me yeh dalna hota h
{/* <BrowserRouter>
  <App></App>
   </BrowserRouter> */}