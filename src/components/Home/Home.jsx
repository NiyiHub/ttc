import React from 'react'
import { Suspense, lazy } from 'react'
import Selection from '../Splash/Splash'


const Choice = lazy(
    ()=> new Promise(resolve=>{
      setTimeout(()=>{
        resolve(
          import('../Choice/Choice')
        )
      }, 5500)  
    })
  )

const Home = () => {
  return (
    <Suspense fallback={<Selection />}>
        <Choice />
    </Suspense>
  )
}

export default Home