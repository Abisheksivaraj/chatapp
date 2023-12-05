import React, { useContext } from "react";
import "../styles/Navbar.css";
import { MdOutlineWbSunny } from "react-icons/md";

import { AuthContext } from "../context/Authcontext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  // const darkMode = () =>{
  //   const setDarkMode = () => {
  //     document.querySelector("body").setAttribute('data-theme','dark')
  //   };
  //   const setLightMode = () => {
  //     document.querySelector("body").setAttribute("data-theme", "dark");
  //   };
  // } t 
  // setDarkMode()
  return (
    <div className="navbar">
      <div className="logo-img">
        <img src={currentUser?.photoURL} alt="" className="user" />
        <span>You</span>
      </div>

      <div className="toggle">
        <button className="theme"><MdOutlineWbSunny/></button>
      </div>
    </div>
  );
};

export default Navbar;
