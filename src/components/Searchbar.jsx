import React from "react";
import { FaSearch } from "react-icons/fa";
import user from "../images/1.jpg";
import "../styles/Search.css";

const Searchbar = () => {
  return (
    <>
      <div className="search">
        <div class="box">
    <div class="search-box">
      <input type="text" placeholder="search" className="search-bar" />
      <label for="check" class="icon">
        <FaSearch/>
      </label>
    </div>

    <div className="user-chat">
          <img src={user} alt="" className="client" />
          <div className="user-info">
            <span>Abishek</span>
          </div>
        </div>
  </div>

        
      </div>
    </>
  );
};

export default Searchbar;
