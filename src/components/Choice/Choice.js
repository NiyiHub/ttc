import React from 'react';
import './Choice.scss'
import { Link } from 'react-router-dom';



// Doctor or Admin Selection Page
const Choice = () => {
  return (
    <div>
      <Link to='doctor'>Doctor</Link>
      <Link to='admin'>Admin</Link>
    </div>
  )
}

export default Choice