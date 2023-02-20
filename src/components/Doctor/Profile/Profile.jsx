import React, { useState } from 'react'
import { profileData } from '../data/Profiledata'
import { countryList } from '../../countryList'

import './Profile.scss'
import { Icon } from '@iconify/react'

const Profile = () => {
  const [profileFormData, setProfileFormData] = useState(profileData) 
  const [selectedCountry, setSelectedCountry] = useState(profileData.country);
  const updateFormData = (event)=>{
    const {name, value} = event.target;
    setProfileFormData({...profileFormData, [name]: value})
  }

  const updateForm = (event)=>{
    event.preventDefault();
    console.log(profileFormData)
  }

  const updateCountry = (event)=>{
    setSelectedCountry(event.target.value)
    updateFormData()
  }


  return (
    <div>
      <div className="title">Profile</div>
      <form className='sign-up-form'>
        <div>
          <img src={profileFormData.profilePic} alt="" />
          <Icon 
             icon="material-symbols:add-circle-rounded" color="#2ebbbc"
             className='plus'
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea  
            name="bio" 
            id="bio"
            value={profileFormData.bio}  
            onChange={updateFormData}
            required
          >
          </textarea>
        </div>
        <div>
          <label htmlFor="firstname">First name</label>
          <input 
            type="text" 
            name="firstName" 
            id="firstname" 
            value={profileFormData.firstName}
            onChange={updateFormData}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">LastName</label>
          <input 
            type="text" 
            name="lastName" 
            id="lastName" 
            value={profileFormData.lastName}
            onChange={updateFormData}
            required  
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input 
            type="date"
            name="dateOfBirth" 
            id="dateOfBirth" 
            value={profileFormData.dateOfBirth}
            onChange={updateFormData}
            required
          />
        </div>
        <div>
          <label htmlFor="sex">Sex</label>
          <input 
            type="text" 
            name="sex" 
            id="sex" 
            value={profileFormData.sex}
            onChange={updateFormData}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <select 
            name="country" 
            id="country" 
            value={selectedCountry} 
            onChange={updateCountry} 
            required>
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
          <label htmlFor="phoneNumber">Phone number</label>
          <input 
            type="tel" 
            name="phoneNumber" 
            id="phoneNumber" 
            value={profileFormData.phoneNumber}
            onChange={updateFormData}
            required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            name="email" 
            id="email" 
            value={profileFormData.email}
            onChange={updateFormData}
            required/>
        </div>
        <div>
          <label htmlFor="specialty">Specialty</label>
          <input 
            type="text" 
            name="specialty" 
            id="specialty"
            value={profileFormData.specialty}
            onChange={updateFormData} 
            required/>
        </div>
        <div>
          <label htmlFor="yearsOfExperience">Years of experience</label>
          <input 
            type="text" 
            name="yearsOfExperience" 
            id="yearsOfExperience" 
            value={profileFormData.yearsOfExperience}
            onChange={updateFormData}
            required/>
        </div>
        <div>
          <label htmlFor="workHours">Work hours</label>
          <input 
            type="text" 
            name="workHours" 
            id="workHours"
            value={profileFormData.workHours}
            onChange={updateFormData} 
            required/>
        </div>
        <div>
          <button className="btn" onClick={updateForm}>Update</button>
        </div>
      </form>
    </div>
  )
}

export default Profile