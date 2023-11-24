import React from 'react'

import Navbar from "./Navbar"
import Search from "./Searchbar"

import "../styles/Sidebar.css";
import "../styles/Search.css";


const Sidebar = () => {
  return (
    
    <div className='sidebar'>
      <Navbar/>
      <Search/>
    </div>
  )
}

export default Sidebar