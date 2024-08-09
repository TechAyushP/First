import React from 'react'

const MapEx1 = () => {
    let arr=[10,20,30,40]
  return (
    <div>
      {arr.length > 0 &&arr.map((val,i)=>{
        console.log(val);
        return (

            <div  style={{height:"30px",width:'100%', backgroundColor:"gray" ,display:'flex',gap:"90%" }}>
                
                <div>{i}</div>
                <div>{val}</div>
                
            </div>
            
           
        )
    
      })
      }
    </div>
  )
}

export default MapEx1