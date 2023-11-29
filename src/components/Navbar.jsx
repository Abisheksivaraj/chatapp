import React from "react";
import "../styles/Navbar.css";

import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-nav">Chats</div>

      <div className="log-out" onClick={() => signOut(auth)}>
        <a href="">
          <FaSignOutAlt />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
