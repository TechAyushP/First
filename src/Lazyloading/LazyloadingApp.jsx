import React, { Suspense } from 'react'

const LazyloadingApp = () => {
    const Lazy=React.lazy(()=>import('./Lazyloading'))
  return (
    <div>
        <h1 style={{textAlign:'center', color:'red'}}>Learning Lazy Loading</h1>
        <Suspense fallback={<div>Loading data</div>}>
        <Lazy/>
        </Suspense>
        
      
    </div>
  )
}

export default LazyloadingApp
