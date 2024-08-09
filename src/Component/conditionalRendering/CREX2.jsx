import React, { useState } from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Help from './Help';

const CREX2 = () => {
    let [state,setState]=useState("")
   switch (state) {
    


    case "Home": return <Home/>; break;
    case "About": return <About/>; break;
    case "Contact": return <Contact/>; break;
    case "Help": return <Help/>; break;
    // case "Logo": return <Logo/>; break;

   
    default: console.log("Logo pe kon click karta h ........");
        break;
   }
    
    

  return (
    <div>
        <nav style={{width:"100vw",height:"15vh",background:"gray",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <div onClick={()=> setState("Home")}>Home</div>
        <div onClick={()=> setState("About")}>About</div>
        <div onClick={()=> setState("Contact")}>Contact</div>
        <div onClick={()=> setState("Help")}>Help</div>

        
        </nav>
        
    </div>
  )
}

export default CREX2