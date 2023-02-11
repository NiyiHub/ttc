import React, { useState } from 'react'
import { countryList } from '../countryList'

// Signin form template starts
function SignInForm(){
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="signinpassword">Password</label>
        <input type="password" id="signinpassword" name="password" />
      </div>
    </form>
  )
}
// Sign form template ends
 

// Signup form template starts
function SignupForm(){
  const [selectedCountry, setSelectedCountry] = useState('Afghanistan');
  const [isAgreed, setIsAgreed] = useState(false);
  return(
    <form>
      <div>
        <label htmlFor="firstname">First name</label>
        <input type="text" name="firstname" id="firstname" placeholder='Dr.' required/>
      </div>
      <div>
        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastname" id="lastname" required/>
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
        <input type="password" id="signup_password" name="signup_password" required/>
      </div>
      <div>
        <label htmlFor="confirm_password">Confirm password</label>
        <input type="password" id="confirm_password" name="confirm_password" required/>
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
        <button
        disabled={!isAgreed}
        >Continue</button>
      </div>
    </form>
  )
}
// Sign up form template ends


const Doctor = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  
  return (
    <div className="form-canvas">
      <div className="top"></div>
      <div className="form-container">
        {
          isSignUp ?
          <SignupForm/> :<SignInForm/>
        }
      </div>
      <div className="bottom"></div>
      <div className="option">
        {
          isSignUp ? "Already have an account ?" : "Haven't an account?" 
        } 
        <span onClick={()=>setIsSignUp(!isSignUp)}><b>{isSignUp ? "Sign in" : "Sign up"}</b></span>
      </div>
    </div>
  )
}

export default Doctor