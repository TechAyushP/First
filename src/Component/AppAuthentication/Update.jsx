import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const Update = () => {
  let[ update,setupdate]=useState({
    name:'',
    email:'',
    password:''
  })
  let {name,email,password}=update
   // it retun object it will give id url vali  it will give user
  let {id}=useParams()
  // useEffect(()=>{
    //     async function getuser() {
    //         let {data}=await axios.get(`http://localhost:3000/user/${id}`);
    //         console.log(data);
    //         setedituser(data)
            
    //     }
    //     getuser()
    // },[])
 // alternative way
 useEffect(()=>{
  axios.get(`http://localhost:3000/user/${id}`).then(({data})=>{
    setupdate(data)

  })

 },[])


 let handleedit=((e)=>{
  let {name,value}=e.target
  setupdate({...update, [name]: value})
      })

      let formsubmit=((e)=>{
        e.preventDefault()
        try{
            axios.put(`http://localhost:3000/user/${id}`,update).then(()=>{
                toast.success('user updated')
                nevigate('/all')
            }).catch(()=>{
                toast.fail('failled')
            })
        }
        catch(error){
            console.log(error);
            
        }

    })

  return (
    <div>
      <h1>Edit USer</h1>
      <label htmlFor="">Name</label>
      <input type="text" name='name' placeholder='Enter name'  value={name}  onChange={handleedit} />
      <br />
      <br />
      <label htmlFor="">Email</label>
      <input type="text" name='email' placeholder='Enter Email' value={email}  onChange={handleedit}/>
      <br />
      <br /><label htmlFor="">Password</label>
      <input type="text" name='password' placeholder='Enter Password'  value={password} onChange={handleedit}/>

      <br />
      <br />
      <button  onClick={formsubmit}> update</button>
      
    </div>
  )
}

export default Update
