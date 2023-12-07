import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import Search from "./Searchbar";
import Chatbox from "./Chatbox";

import "../styles/Sidebar.css";
import { DarkModeContext } from "../context/themecontext";

const Sidebar = () => {
  const toggleHandler = () => {
    setDarkMode(darkMode === false ? true : false);
  };

  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "sidebar-dark" : "sidebar"}>
      <Navbar />
      <Search />
      <Chatbox />
    </div>
  );
};

export default Sidebar;
