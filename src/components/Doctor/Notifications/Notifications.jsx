import React from 'react'
import { notificationsData } from '../data/Notifications'
import { Link } from 'react-router-dom'
import './Notifications.scss'

const Notifications = () => {
  return (
    <div className='notifications'>
        {
            notificationsData.map((notification, idx)=>(
                <div className="notif" key={idx}>
                    <p>
                        {notification.notification}
                    </p>
                    <p>
                        {notification.time}
                    </p>
                    <Link className="btn-notification">
                        Check
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default Notifications