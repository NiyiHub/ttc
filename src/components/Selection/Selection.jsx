import React from 'react'
import './Selection.scss'
import { lazy, Suspense } from 'react';
import Ttclogo from '../../assets/splash_images/woman.svg'
import Ttclogo2 from '../../assets/splash_images/ttc_words.svg'
import { useState } from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Doctor from '../Doctor/Doctor';

const Choice = lazy(
  ()=> new Promise(resolve=>{
    setTimeout(()=>{
      resolve(
        import('../Choice/Choice.js')
      )
    }, 5500)  
  })
)

const Selection = () => {
    const[delayedTitle, setDelayedTitle] = useState(false)
    setTimeout(() => {
      setDelayedTitle(true);
    }, 3000);

  return (
    <Router>
        <Suspense 
          fallback={
            <div className="container">
                <div className="img-container">
                  <img src={Ttclogo} alt="TTC-logo" />
                </div> 
                {
                    delayedTitle && (
                    <>
                      <div className="logo-container">
                        <img src={Ttclogo2} alt="TTC-logo-2" />
                      </div>
                      <div className="footer">
                        TRYING TO CONCIEVE
                      </div>
                    </>
                  )
                }
            </div>
          }
        >
        <Choice />
        {/* Defining Routes for The application */}
        <Routes>
            <Route path='/' element={<Choice />} />
            <Route path='admin' element={<Admin/>} />
            <Route path='doctor' element={<Doctor/>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default Selection