import React, { useState } from 'react';
import './Doctor.scss'
import { Link } from 'react-router-dom';
import { countryList } from '../countryList';
import OpenEye from '../../assets/sign_up/eye-open.svg';
import ClosedEye from '../../assets/sign_up/eye-closed.svg';
import Preggy from '../../assets/sign_up/preggy.svg';
import Stethoscope from '../../assets/sign_up/stethoscope.svg';
import Envelope from '../../assets/sign_up/envelope-line.svg'
import Padlock from '../../assets/sign_up/padlock.svg'
// import { DateTime } from 'luxon';

// Signin form template starts
function SignInForm(){
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className='sign-in-form'>
        <div>
          <label htmlFor="email">Email</label>
          <div className="field">
            <input type="email" id="email" name="email" className='auth'/>
            <img src={Envelope} alt="envelope" />
          </div>
        </div>
        <div>
          <label htmlFor="signinpassword">Password</label>
          <div className="field">
          <img src={Padlock} alt="padlock" />
          <input 
            type={showPassword ? 'text' : 'password'} 
            id="signinpassword" 
            name="password" 
            className='auth'  
            />
            <img 
              src={showPassword ? ClosedEye : OpenEye} 
              alt="password-toggler" 
              onClick={()=>setShowPassword(!showPassword)}
            />
          </div>
        </div>
        <div>
            Forgot Password?
        </div>
        <div>   
          <Link className='btn sign' to="/doctor/home">SIGN IN</Link>
        </div>
    </form>
  )
}
// Sign form template ends
 

// Signup form template starts
function SignupForm(){
  const [selectedCountry, setSelectedCountry] = useState('Afghanistan');
  const [isAgreed, setIsAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [date, setDate] = useState(DateTime.local().toFormat('dd/MM/yyyy'));
  // const handleChange = (event) => {
  //   setDate(DateTime.fromISO(event.target.value).toFormat('dd/MM/yyyy'));
  //   console.log(date)
  // };

  return(
    <form className='sign-up-form'>
      <div>
        <label htmlFor="firstname">First name</label>
        <input type="text" name="firstname" id="firstname" placeholder='Dr.' required/>
      </div>
      <div>
        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastname" id="lastname" required/>
      </div>
      <div>
        <label htmlFor="dateofbirth">Date of Birth</label>
        <input 
          type="date" 
          name="dateofbirth" 
          id="dateofbirth" 
          placeholder="dd/mm/yyyy" 
          // onChange={handleChange}
          required/>
      </div>
      <div>
        <label htmlFor="sex">Sex</label>
        <input type="text" name="sex" id="sex" required/>
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select name="country" id="country" value={selectedCountry} onChange={e=> setSelectedCountry(e.target.value)} required>
          {
            countryList.map(country =>(
              <option key={country} value={country}>
                {country}
              </option>
            ))
          }
        </select>
      </div>
      <div>
        <label htmlFor="phone">Phone number</label>
        <input type="tel" name="phone" id="phone" required/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required/>
      </div>
      <div>
        <label htmlFor="signup_password">Password</label>
        <div className="field">
          <input 
            type={showPassword ? 'text' : 'password'}  
            id="signup_password" 
            name="signup_password" 
            required
          />
          <img 
            src={showPassword ? ClosedEye : OpenEye} 
            alt="password-toggler" 
            onClick={()=>setShowPassword(!showPassword)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="confirm_password">Confirm password</label>
        <div className="field">
          <input 
            type={showConfirmPassword ? 'text' : 'password'}  
            id="confirm_password" 
            name="confirm_password" 
            required/>
          <img 
            src={showConfirmPassword ? ClosedEye : OpenEye} 
            alt="password-toggler" 
            onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
          />          
        </div>
      </div>
      <div>
        <input
            type="checkbox"
            checked={isAgreed}
            onChange={e => setIsAgreed(e.target.checked)}
            id="agreement"
            required
          />
          <label htmlFor="agreement">I agree to TTC's membership terms</label>
      </div>
      <div>
          {/* turn these elements to router links */}
        <Link
        className={isAgreed ? 'btn' : 'btn-disabled'}
        disabled={isAgreed}
        >Continue</Link>
      </div>
    </form>
  )
}
// Sign up form template ends


const Doctor = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="form-canvas">
      <div className="top">
        <img src={Preggy} alt="pregnancy" />
      </div>
      <div className="form-container">
        {
          isSignUp ?
          <SignupForm/> :<SignInForm/>
        }
      </div>
      <div className="option">
        {
          isSignUp ? "Already have an account ?" : "Haven't any account?" 
        } 
          <span onClick={()=>setIsSignUp(!isSignUp)}><b>{isSignUp ? "Sign in" : "Create account"}</b></span>
      </div>
      <div className="bottom">
        <img src={Stethoscope} alt="stethoscope" />
      </div>
    </div>
  )
}

export default Doctor