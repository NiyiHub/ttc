import React from 'react'
import './Homepage.scss'
import { newsLetter } from '../data/Newsletter'
import Cover from '../images/image.svg'
import { Link } from 'react-router-dom'
import Requests from '../images/icons/request-icon.svg'
import Patients from '../images/icons/patients-icon.svg'
import { Icon } from '@iconify/react'
import { patientData } from '../data/Patients'

const Homepage = () => {
  return (
    <div className="sub-coat">
      <header>
        <div className="mobile-btn">
          <button>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 11H12.5C13.0525 11 13.5 11.4475 13.5 12C13.5 12.5525 13.0525 13 12.5 13H4C3.4475 13 3 12.5525 3 12C3 11.4475 3.4475 11 4 11ZM4 5H20C20.5525 5 21 5.4475 21 6C21 6.5525 20.5525 7 20 7H4C3.4475 7 3 6.5525 3 6C3 5.4475 3.4475 5 4 5ZM4 17H17C17.5525 17 18 17.4475 18 18C18 18.5525 17.5525 19 17 19H4C3.4475 19 3 18.5525 3 18C3 17.4475 3.4475 17 4 17Z" fill="#607D8B"/>
          </svg>
          </button>
        </div>
        <div className="main-text">
          Welcome, <br /> Dr. Jennifer Jaiye 
          {/* <span><img src={Hello} alt="" /></span> */}
        </div>
        <div className="notifications-btn">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="currentColor" d="m32.85 28.13l-.34-.3A14.37 14.37 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M15.32 32a2.65 2.65 0 0 0 5.25 0Z" className="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
          </button>
        </div>
      </header>
      <section>
        <div className="main-text">
          Newsletters
        </div>
        <div className="t-content">
          <img src={Cover} alt="Best and worst places to see in 2022" />
          {
            newsLetter.slice(0, 2).map((news,index)=>(
              <div className="image" key={index}>
                <img src={news.source} alt="" />
              </div>
            ))
          }
        </div>
        <div className="link">
          <Link className='nav-icon'>
            See More 
            <Icon           
              icon="ic:baseline-keyboard-double-arrow-right"
              className='arrow' 
            />
          </Link>
        </div>
      </section>
      <div className="bottom">
        <section>
          <div className="main-text">
            Quick Access
          </div>
          <div className="b-content">
            <Link className='btns'>
              <img src={Requests} alt="" />
              Requests
            </Link>
            <Link className='btns'>
              <img src={Patients} alt="" />
              Patients
            </Link>
          </div>
        </section>
        <section>
          <div className="main-text">
            Today's Patient
          </div>
          <div className="content">
            {
              patientData.map((patient, idx)=>(
                <div className="cover" key={idx}>
                  <img src={patient.image} alt="" />
                  <div className="info">
                    <p>{patient.name}</p>
                    <p>{patient.activity} <span></span> {patient.time}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default Homepage