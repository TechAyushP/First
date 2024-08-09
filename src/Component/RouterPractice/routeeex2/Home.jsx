import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import About from './About';
import Contact from './Contact';

const Home = () => {
    const id=5
    let navigate=useNavigate()
    // usenevigate hook The useNavigate hook is a powerful and intuitive way to navigate between pages in your React application. It simplifies the process of handling ... work like Link 

    //-------------------------
    // agr hamko kuch or bhi bhejna h for ex id to ham navigate ke andr he pass kar denge coma laga ke or dusri tarf uselocation hook ka use kar lenge
    let goabout=()=>{
        navigate('/Contact',{state:{id:id}})
    }
    let gocontact=()=>{
        navigate('/About')
    }
  return (
    <div> 
        <h1>i Am Home</h1>
        <button onClick={goabout}>About</button>
        <button onClick={gocontact}>Contact</button>
       

    </div>
  )
}

export default Home