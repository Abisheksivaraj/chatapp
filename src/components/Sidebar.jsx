import React from "react";

import Navbar from "./Navbar";
import Search from "./Searchbar";
import Chatbox from "./Chatbox";


import "../styles/Sidebar.css";
import "../styles/Search.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chatbox />
      
    </div>
  );
};

export default Sidebar;
