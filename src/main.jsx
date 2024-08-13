import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyContext from './Component/myContext/MyContext';
import MyContextEx from './Component/myContextEx2/MyContextEx.jsx';
import AppAuthentictionIntro from './Component/AppAuthentication/AppAuthentictionIntro.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<App/>

   //it is for my context hook 

  //  <MyContext>
  //   <App />
  //  </MyContext>


   // it is for context Ex
  //  <MyContextEx>
  //   <App />
  //  </MyContextEx>

   

// it is for app crud opn

  //<AppAuthentictionIntro>  
     //<App/>
   // 
  // </AppAuthentictionIntro>




)
