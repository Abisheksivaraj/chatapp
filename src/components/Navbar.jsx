import React, { useContext } from "react";
import "../styles/Navbar.css";

import { AuthContext } from "../context/Authcontext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="logo-img">
        <img src={currentUser.photoURL} alt="" className="user" />
        <span>You</span>
      </div>
    </div>
  );
};

export default Navbar;
