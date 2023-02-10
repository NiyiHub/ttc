import React from 'react'
import './Splash.scss';
import Ttclogo from '../../assets/splash_images/woman.svg';
import Ttclogo2 from '../../assets/splash_images/ttc_words.svg';
import { useState } from 'react';


const Selection = () => {
    const[delayedTitle, setDelayedTitle] = useState(false)
    setTimeout(() => {
      setDelayedTitle(true);
    }, 3000);

  return (
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
  )
}

export default Selection