import React from 'react'
import '../styles/Navbar.css'

import logout from "../images/logout.png"

import user from "../images/1.jpg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-nav">Chat Hub...!</div>

      <div className="client-img">
        <img src={user} 
        alt="" className='client'/>
      </div>
      <span>Abishek</span>
      <a style={{cursor:'pointer'}} className="logout">
        <img src={logout} alt="" className='out' />
      </a>
    </div>
  );
}

export default Navbar