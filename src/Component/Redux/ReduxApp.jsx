import React from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import Counter from './Counter';
 
 const counterslice=createSlice({
    name:"counter",
    initialState:{count:5},
    reducers:{
        increment:(state,action)=>{
            console.log(action);
            state.count +=5
            

        },
        decrement:(state,action)=>{
            console.log(action);
            state.count -=5
            
        }
    }
 })
 export let {increment,decrement}=counterslice.actions

 let mystore=configureStore({
    reducer:{
        counter:counterslice.reducer

    }
 })

const ReduxApp = () => {
  return (
     <Provider store={mystore}>
        <Counter/>
     </Provider>
  )
}

export default ReduxApp;
