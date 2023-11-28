import React from 'react'
import '../styles/Navbar.css'

import { FaSignOutAlt } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-nav">Chats</div>

      <div className="log-out">
        <a href="">
          <FaSignOutAlt />
        </a>
      </div>
    </div>
  );
}

export default Navbar