import React from 'react'
import useFetchData from './useFetchData'

const CustomHookFetch = () => {
  let data=useFetchData('https://jsonplaceholder.typicode.com/users')
  console.log(data);
  
  return (
    <div>
      {
        data?.map((todo)=>{
          return(
            <div >
              <h1 key={todo.id}>Name: {todo.name}</h1>
              
              <h1 key={todo.id}> Username: {todo.username}</h1>
             
              <h1 key={todo.id}> Email: {todo.email}</h1>


            </div>
          )
        })
      }
    </div>
  )
}

export default CustomHookFetch
