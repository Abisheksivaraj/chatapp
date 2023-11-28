import React from "react";

import Sidebar from "../components/Sidebar";

import Chats from "../components/Chats";
import Search from "../components/Searchbar";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="green"></div>
      <div className="blue"></div>
      <div className="container">
        <Sidebar />
        <Chats />
        {/* <Message/> */}
        {/* <Search /> */}
      </div>
    </div>
  );
};

export default Home;
