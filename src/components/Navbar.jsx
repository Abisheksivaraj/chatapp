import React, { useContext, useState } from "react";
import "../styles/Navbar.css";
import { MdOutlineWbSunny } from "react-icons/md";

import { AuthContext } from "../context/Authcontext";
import { DarkModeContext } from "../context/themecontext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  
  const toggleHandler = ()=>{
    setDarkMode((darkMode === false) ? true : false)
  }

  return (
    <div className={darkMode ? "navbar-dark" : "navbar"}>
      <div className="logo-img">
        <img src={currentUser?.photoURL} alt="" className="user" />
        <span className="user-name">You</span>
      </div>

      <div className="toggle">
        <button
          className={darkMode ? "theme-dark" : "theme"}
          onClick={toggleHandler}
        >
          <MdOutlineWbSunny className={darkMode ? "sun-dark" : "sun"} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
