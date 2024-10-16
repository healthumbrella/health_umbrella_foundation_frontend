import React from 'react'
import './Header_v2.scss';
const Header_v2 = () => {
  return (
    <div className='Header_v2'>
      <img className='logo_v2' src="/Images_v2/logo.png" alt="logo" />
      <div className='Header_v2_route'>
        <h6>Home</h6>
        <h6>About Us</h6>
        <h6>Diseases</h6>
        <h6>Share Experience</h6>
        <h6>Ask Suggestion</h6>
        <h6>Pathy</h6>
        <h6>Clinics/Hospitals</h6>
      </div>
      <div className='Header_v2_search'>
        <img src="/Images_v2/Search.png" alt="icon" />
        <input type="text" placeholder='Search' />
      </div>
      
    </div>
  )
}

export default Header_v2
