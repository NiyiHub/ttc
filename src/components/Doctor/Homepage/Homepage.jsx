import React from 'react'
import './Homepage.scss'
import Hello from '../images/hello.svg' 

const Homepage = () => {
  return (
    <div className="main-coat">
      <header>
        <div className="main-text">
          Welcome 
          <span><img src={Hello} alt="" /></span>
          Dr Jennifer Jaiye
        </div>
      </header>
      <section>
        <div className="main-text">
          Newsletters
        </div>
        <div className="content">
          
        </div>
      </section>
      <section>
        <div className="main-text"></div>
        <div className="content"></div>
      </section>
      <section>
        <div className="main-text"></div>
        <div className="content"></div>
      </section>
    </div>
  )
}

export default Homepage