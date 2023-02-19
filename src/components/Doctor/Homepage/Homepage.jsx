import React from 'react'
import './Homepage.scss'
import { newsLetter } from '../data/Newsletter'
import Cover from '../images/image.svg'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { patientData } from '../data/Patients'

const Homepage = () => {
  return (
    <div className="sub-coat">
      <header>
        <div className="main-text">
          Welcome, Dr. Jennifer Jaiye 
          {/* <span><img src={Hello} alt="" /></span> */}
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
             
            </Link>
            <Link className='btns'>
              
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