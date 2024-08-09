import React from 'react'

const MapEx2Child = (props) => {
    let value=props.props
    console.log(value);
  return (
    <div style={{width:"250px",height:"300px",margin:"20px", borderRadius:"5%" ,backgroundColor:"grey",padding:"10px"}}>
        <ol>
            <li>{props.props.id}</li>
            {/* <li>{props.props.type}</li> */}
            {/* <li>{props.props.login}</li> */}
            {/* <li>{props.props.node_id}</li> */}
            {/* <li>{props.props.url}</li> */}
            <img src={props.props.avatar_url} alt="" />
        </ol>
    </div>
  )
}

export default MapEx2Child