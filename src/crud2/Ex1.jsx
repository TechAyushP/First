import React, { useEffect, useState } from 'react'
import EmployeeData from './EmployeeData';


const Ex1 = () => {
    const [state,setstate]=useState([])
    const [name,setname]=useState('')
    const [lastname,setlastname]=useState('')
    const [age,setage]=useState(0)
    const [id,setid]=useState(0)


    useEffect(()=>{setstate(EmployeeData)},[])
    const handleEdit=(id)=>{
        const dlt=state.filter(item=>item.id===id);
        if( dlt !== undefined)
            {
            setname(dlt[0].name);
            setlastname(dlt[0].lastname);
            setage(dlt[0].age);
            setid(id);

        }
    }
    const handleDelete=(id)=>{
        if (id>0)
            if(window.confirm('are you want to delete data'))
            {

            const dlt=state.filter(item=>item.id!==id);
             return setstate(dlt);

        } 
        const handleSave=()=>{
        }
        const handleClear=()=>{
            setname('');
            setlastname('');
            setage('');
            setid(0);
        }
    }
  return (
    <div>
        <div style={{display:'flex', justifyContent:'center', gap:'5px'}}>
            <div style={{ gap:"5px"}}>
                <label>Name:
                    <input  style={{border:'2px solid black'}} type="text" placeholder='Enter the First Name' onChange={(e)=>setname(e.target.value)} value={name} />
                </label>
            </div> 
            <div>
                <label>Last_Name:
                    <input style={{border:'2px solid black'}}  type="text" placeholder='Enter the Last Name'onChange={(e)=>setlastname(e.target.value)}  value={lastname} />
                </label>
                
            </div>
            <div>
                <label>Age:
                    <input style={{border:'2px solid black'}} type="text" placeholder='Enter the Age' onChange={(e)=>setage(e.target.value)  } value={age}/>
                </label>
                
            </div>
            
            <button style={{border:'1px solid black' ,color:'red', background:'black'}} onClick={()=>handleSave()}> Save</button> &nbsp;
            <button  style={{border:'1px solid black',color:'blue',background:'black'}} onClick={()=>handleClear()}>Clear</button>

        </div>
<table style={{border:'2px solid black', }}>
    <thead >
        <tr style={{border:'2px solid black',padding:'5px'}} >
            <td>Sr.No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Action</td>


        </tr>
    </thead>
    <tbody style={{justifyContent:'center'}}>
        {
            state.map((item,index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>

                        <td>{item.id}</td>
                        <td>{item.Name}</td>
                        <td>{item.Last_Name}</td>
                        <td>{item.Age}</td>
                        <td> 
                            <button style={{border:'2px solid black' ,color:'red', background:'black'}} onClick={()=>handleEdit(item.id)}> Edit</button> &nbsp;
                            <button  style={{border:'2px solid black',color:'blue',background:'black'}} onClick={()=>handleDelete(item.id)}>Delete</button>
                            </td>
                    </tr>
                )
            })
        }
    </tbody>
</table>
    </div>
  )
}

export default Ex1