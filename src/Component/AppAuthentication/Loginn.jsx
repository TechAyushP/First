// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast'
// import { Navigate, useNavigate } from 'react-router-dom'

// const Login = () => {
//     let nevigate=useNavigate()
//     let [login,setlogin]=useState({
//         email:'',
//         password:''
//     })

//     let [register,setregister]=useState(null)
//     useEffect(()=>{
//         axios.get('http://localhost:3000/user').then(({data})=>{// respone me data mil rha h console me jake check kra to usko destructure karke likh dia
//         // console.log(data); 
//         setregister(data)
        

//         }).catch((error)=>{
// console.log(error);


//         })
//     },[])
//     let handlesubmit=(e)=>{
//         e.preventDefault()
//        let authorise= register.find((user)=>{
//         console.log(user);
//         return user.email===login.email && user.password===login.password
        

//         });
//         console.log(authorise);
//         if (authorise) {
//             {nevigate('/profile')}
            
//         }
//         else{
//             toast.error('somthing went wrong')
            
//         }

        


//     }
//     let handlechange=(e)=>{
//         let {name,value}=e.target
// console.log(e);
// setlogin({...login ,[name]:value})

//     }

    
//   return (
//     <div>
//         <h1>Login</h1>
//       <form action="" onSubmit={handlesubmit}>
//         <label htmlFor="">Email</label>
//         <input type="text" placeholder='Enter Email' name='email' value={login.email} onChange={handlechange} /> <br /> <br />
//         <label htmlFor="">Password</label>
//         <input type="text" placeholder='Enter Password' name='password' value={login.password}  onChange={handlechange}/> <br /> <br />
//         <input type="submit" value="login" />
//       </form>
//       <div>
      

//       </div>
//     </div>
//   )
// }

// export default Login


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    let [login, setLogin] = useState({
        email: '',
        password: ''
    })

    let [register, setRegister] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3000/user').then(({ data }) => {
            setRegister(data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    let handleSubmit = (e) => {
        e.preventDefault()
        let authorise = register.find((user) => {
            return user.email === login.email && user.password === login.password
        })
        if (authorise) {
            sessionStorage.setItem('token' , authorise.id)
            navigate('/profile')
        } else {
            toast.error('Something went wrong')
        }
    }

    let handleChange = (e) => {
        let { name, value } = e.target
        setLogin({ ...login, [name]: value })
    }

    return (
        <div>
            <style>
                {`
                    .login-container {
                        max-width: 400px;
                        
                        margin:auto;
                        margin-top:200px;
                        padding: 1rem;
                        border: 1px solid #ccc;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }

                    .login-container h1 {
                        text-align: center;
                    }

                    .login-container form {
                        display: flex;
                        flex-direction: column;
                    }

                    .login-container label {
                        margin-bottom: 0.5rem;
                    }

                    .login-container input[type="text"],
                    .login-container input[type="submit"] {
                        padding: 0.5rem;
                        margin-bottom: 1rem;
                    }

                    .login-container input[type="submit"] {
                        background-color: #007bff;
                        color: white;
                        border: none;
                        cursor: pointer;
                    }

                    .login-container input[type="submit"]:hover {
                        background-color: #0056b3;
                    }
                `}
            </style>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        value={login.email}
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <input
                        type="text"
                        placeholder="Enter Password"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                    />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login

