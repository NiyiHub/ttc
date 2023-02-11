import React from 'react';
import { Link } from 'react-router-dom';
import './Choice.scss';
import TopLogo from '../../assets/sign_up/preggy.svg';
import Stethoscope from '../../assets/sign_up/stethoscope.svg'

// Doctor or Admin Selection Page
const Choice = () => {
  return (
    <div className="sign-up">
        <div className="top-image">
            <img src={TopLogo} alt="" />
        </div>
        <div className="links">
          <div className="l-one">
            <Link
            className='btn' to="admin">SIGN IN AS AN ADMIN</Link>
          </div>
          <div className="l-two">
          <Link 
            className='btn'
          to="doctor">SIGN IN AS A DOCTOR</Link>
          </div>
        </div>
        <div className="bottom-image">
          <img src={Stethoscope} alt="" />
        </div>
    </div>
  )
}

export default Choice