import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllUsers = () => {
    let [all,setall]=useState(null)
    
    useEffect(()=>{
        axios.get('http://localhost:3000/user').then((reponse)=>{
            setall(reponse.data)

        })

    },[])
    
  return (
    <div>

        {
            all?.map((val,i)=>{
                let{id,name,email}=val
                return(
                    
                        <div key={i}>

                    <p>id:{id}</p>
                    <p>name:{name}</p>
                    <p>email:{email}</p>
                    <Link to={ `/update/${id}`} > <button>Update</button></Link>

                        </div>
                )
            })
        }
      
    </div>
  )
}

export default AllUsers
