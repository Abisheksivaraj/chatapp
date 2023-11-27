import React from "react";

import Sidebar from "../components/Sidebar";

import Chats from "../components/Chats";
import Search from "../components/Searchbar";

import "../styles/Home.css";

const home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chats />
        {/* <Search/> */}
      </div>
    </div>
  );
};

export default home;
