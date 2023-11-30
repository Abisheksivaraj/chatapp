import React, { useContext } from "react";
import "../styles/Navbar.css";

import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
// import { AuthContext } from "../context/Authcontext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      
      <div className="logo-img">
        <img src="src/images/1.jpg" alt="" className="user" />
        <span>You</span>
      </div>
      <div className="log-out">
        <NavLink to="/login">
          {" "}
          <a href="" onClick={() => signOut(auth)}>
            <FaSignOutAlt />
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
