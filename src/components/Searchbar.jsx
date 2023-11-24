import React from 'react'
import { FaSearch } from "react-icons/fa";
import user from '../images/1.jpg'
import "../styles/Search.css";

const Searchbar = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Search or start a new chat..." />
        <a href="">
          <FaSearch />
        </a>
      </div>
      <div className="user-chat">
        <img src={user} alt="" className="client" />
        <div className="user-info">
          <span>Abishek</span>
        </div>
      </div>
    </div>
  );
}

export default Searchbar