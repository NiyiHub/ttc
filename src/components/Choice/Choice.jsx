import React from 'react';
import { Link } from 'react-router-dom';
import './Choice.scss';

// Doctor or Admin Selection Page
const Choice = () => {
  return (
    <div className="sign-up">
        <div className="top-image">

        </div>
        <div className="links">
          <div className="l-one">
            <Link to="doctor">DOCTOR</Link>
          </div>
          <div className="l-two">
          <Link to="admin">Administrator</Link>
          </div>
        </div>
        <div className="bottom-image">

        </div>
    </div>
  )
}

export default Choice