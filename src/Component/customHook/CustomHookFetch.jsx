import React from 'react'
import useFetchData from './useFetchData'

const CustomHookFetch = () => {
  let data = useFetchData('https://jsonplaceholder.typicode.com/todos')
  console.log(data);
  
  return (
    <div>
      {
        data?.map((todos)=>{
          return(
            <div key={todos.id}>
              <p>{todos.title}</p>
              <h1 > Username: {todos.userId}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default CustomHookFetch
