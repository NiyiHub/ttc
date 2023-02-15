import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Sidenav from './Sidenav/Sidenav';


const Layout = () => {
  return (
    <div className='main-coat'>
      <aside className="side-bar">
        <Sidenav/>
      </aside>
      <main>
        <Outlet/>
      </main>
      <aside className="notifications">
          
      </aside>        
    </div>
  )
}

export default Layout