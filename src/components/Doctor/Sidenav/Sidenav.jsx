/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidenav.scss'
import { Icon } from '@iconify/react'
import ProfilePhoto from '../images/profile_photo.png'


const Sidenav = () => {
  return (

    <nav>
        <div className="profile">
            <img src={ProfilePhoto} alt="profile photo" />
            <span>Dr Jennifer</span>
        </div>
            <span className="divider"></span>
        <NavLink
            className='nav-link'
            to={''}
            onClick={
                ({isActive})=>console.log({isActive})
            }
        >
            <Icon 
                icon="entypo:home" 
                className='nav-icon'
            />
            <span>Home</span>
        </NavLink>
        <NavLink
             
            className='nav-link'
            to={'profile'}
            >
            <Icon 
                icon="healthicons:ui-user-profile" className='nav-icon'/>
            <span>Profile</span>
        </NavLink>
        <NavLink
             className='nav-link'>
            <Icon 
                icon="bi:chat-dots-fill" 
                className='nav-icon'
            />
            <span>Chat</span>
        </NavLink>
        <NavLink
             className='nav-link'>
            <Icon 
                icon="mingcute:calendar-fill" 
                className='nav-icon'
            />
            <span>Appointment</span>
        </NavLink>


        <NavLink
             className='nav-link'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0.959961C5.91212 0.959961 0.959961 5.9126 0.959961 12C0.959961 18.0873 5.91212 23.04 12 23.04C18.0878 23.04 23.04 18.0873 23.04 12C23.04 5.9126 18.0878 0.959961 12 0.959961ZM8.15996 7.19996H9.61777L11.804 10.56H14.9418V7.19996H16.23V10.56H17.76V11.52H16.23V12.96H17.76V13.92H16.23V17.28H14.729L12.5287 13.92H9.43402V17.28H8.15996V13.92H6.71996V12.96H8.15996V11.52H6.71996V10.56H8.15996V7.19996ZM9.43402 9.1959V10.56H10.3275L9.43402 9.1959ZM9.43402 11.52V12.96H11.8996L10.9565 11.52H9.43402ZM12.4284 11.52L13.365 12.96H14.9418V11.52H12.4284ZM13.9893 13.92L14.9418 15.3834V13.92H13.9893Z" className='nav-icon'/>
            </svg>
            <span>Subscriptions</span>
        </NavLink>
        <span className="divider"></span>
        <NavLink className='nav-link'>
            <Icon 
                icon="ic:sharp-settings" 
                className='nav-icon'
            />
            <span>Settings</span>
        </NavLink>
        <NavLink className='nav-link'>
            <Icon 
                icon="bx:log-out-circle" 
                rotate={1} 
                vFlip={true} 
                className="nav-icon"
            />
            <span>Log out</span>
        </NavLink>
    </nav>
  )
}

export default Sidenav