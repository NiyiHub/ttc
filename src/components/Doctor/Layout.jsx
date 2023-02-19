import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Notifications from './Notifications/Notifications';
import Sidenav from './Sidenav/Sidenav';


const Layout = () => {

const[menu, setMenu] = useState(true)
const[notification, setNotification] = useState(false)

const switcher =()=>{
  if(notification){
    setNotification(false)
  }
  if(!menu){
    setMenu(true)
  }
}

  return (
    <div className='main-coat'>
      <div className="mobile-btn"
        onClick={
          ()=>{
            setMenu(!menu)
            switcher()
          }
        }        
      >
          <button>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 11H12.5C13.0525 11 13.5 11.4475 13.5 12C13.5 12.5525 13.0525 13 12.5 13H4C3.4475 13 3 12.5525 3 12C3 11.4475 3.4475 11 4 11ZM4 5H20C20.5525 5 21 5.4475 21 6C21 6.5525 20.5525 7 20 7H4C3.4475 7 3 6.5525 3 6C3 5.4475 3.4475 5 4 5ZM4 17H17C17.5525 17 18 17.4475 18 18C18 18.5525 17.5525 19 17 19H4C3.4475 19 3 18.5525 3 18C3 17.4475 3.4475 17 4 17Z" 
          className={
             menu  ? "lines" : "lines white"         
            } 
          fill="#607D8B"/>
          </svg>
          </button>
      </div>
      <aside className={menu ? "open" : "side-bar"}>
        <Sidenav
          menu={menu}
          changeMenu={setMenu}
        />
      </aside>
      <main
        className={
          !menu || notification ? "choked" : ""
        }
        id="main"
      >
        <Outlet />
      </main>
      <div className="notifications-btn
      "
      onClick={()=>{
        setNotification(!notification);
        switcher()
        }}
      >
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 36 36"><path fill="currentColor" d="m32.85 28.13l-.34-.3A14.37 14.37 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8Z" className="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M15.32 32a2.65 2.65 0 0 0 5.25 0Z" className="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
        </button>
      </div>
      <aside className={notification ? "notification" : ""}>
        <Notifications/>
      </aside>        
    </div>
  )
}

export default Layout