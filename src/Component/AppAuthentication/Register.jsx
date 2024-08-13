// import axios from 'axios'
// import React, { useState } from 'react'
// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'

// const Register = () => {
//     let [register,setregister]=useState({
//         name:'',
//         email:'',
//         password:''

//     })
//     let nevigate=useNavigate()
//     let {name,email,password }=register
//     let handlechange=(e)=>{
//         let {name,value}=e.target
//         setregister({...register,[name]:value})
        
//     }
//     let handlesubmit=(e)=>{
//         e.preventDefault()

//         try {
//             if(register.email !=="" && register.password !==""){
//                 axios.post("http://localhost:3000/user",register).then(()=>{ 
//                     toast.success('register succesfully')
//                      setregister({ name:'', email:'', password:''})
//                      nevigate('/login')
                    
//                 }).catch(()=>{
//                     console.log("data not send");
                    
//                 })
//             }else(
//                 toast.error("Fill carefully")
//             )
           
            
//         } catch (error) {
//             console.log(error);
            
//         }
        
        
//     }
//   return (
//     <div style={{height:'100vh', width:'100vw', background:'#ffe6e6' }}>
//       <form action="" style={{display:'flex', justifyContent:'space-evenly', padding:'15px', }}>
//         <label htmlFor="">Name:</label>
//         <input type="text" style={{border:'1px solid black'}} placeholder='Enter  Name'  name='name' value={name} onChange={handlechange} /> 
//         <br />

//         <label htmlFor="">Email:</label>
//         <input type="text" style={{border:'1px solid black'}} placeholder='Enter  Email' name='email' value={email} onChange={handlechange} /> <br />

//         <label htmlFor="">Password</label>
//         <input type="text" style={{border:'1px solid black'}} placeholder='Enter Password' name='password' value={password} onChange={handlechange} />
//         <br /> 

//         <button onClick={handlesubmit} style={{border:'1px solid black'}}>Signup</button>


//       </form>
//     </div>
//   )
// }

// export default Register





import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { name, email, password } = register;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (register.email !== '' && register.password !== '') {
        axios.post('http://localhost:3000/user', register)
          .then(() => { 
            toast.success('Registered successfully');
            setRegister({ name: '', email: '', password: '' });
            navigate('/login');
          })
          .catch(() => {
            console.log('Data not sent');
          });
      } else {
        toast.error('Please fill out all fields');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="name" style={styles.label}>Name:</label>
        <input
          type="text"
          style={styles.input}
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          type="email"
          style={styles.input}
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password" style={styles.label}>Password:</label>
        <input
          type="password"
          style={styles.input}
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br />

        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f0f4f8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#333',
    width: '100%',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  inputFocus: {
    borderColor: '#4CAF50',
    boxShadow: '0 0 8px rgba(0, 255, 0, 0.3)',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#45a049',
    transform: 'scale(1.05)',
  },
};

export default Register;
