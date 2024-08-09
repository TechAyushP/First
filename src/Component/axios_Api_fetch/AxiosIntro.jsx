import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosIntro = () => {
    const data={fname:'',lname:''}
    let [inputdata,setInputdata]=useState(data);
    let handle=(e)=>{
        setInputdata({...inputdata,[e.target.name]:e.target.value});
        console.log(inputdata);

    }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            console.log(response);
        })

    },[])
    let handleclick=(e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users',inputdata).then((response)=>{
            console.log(response);
        })

    }
    let handleupdate=(e)=>{
        e.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/users',inputdata).then((response)=>{
            console.log(response);

        })

    }

  return (
    <div>
        <form>
            <input style={{border:'2px solid black'}} type='text' name='fname' value={inputdata.fname} onChange={handle}/>
            <input style={{border:'2px solid black'}} type='text' name='lname' value={inputdata.lname} onChange={handle}/>

            <button style={{border:'2px solid black'}} onClick={handleclick}>submit</button>
            <button style={{border:'2px solid black'}} onClick={handleupdate}>Update</button>
        </form>
    </div>
  )
}

export default AxiosIntro