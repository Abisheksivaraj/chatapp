import React from "react";

import Sidebar from "../components/Sidebar";
import { useState , useContext} from "react";

import Chats from "../components/Chats";
import Search from "../components/Searchbar";
import Input from "../components/Input";
import Message from "../components/Messages";
import { DarkModeContext } from "../context/themecontext";
import "../styles/Home.css";

const Home = () => {

  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const toggleHandler = () => {
    setDarkMode(darkMode === false ? true : false);
  };

  return (
    <div className={darkMode ? "home-dark" : "home"}>
      <div className="container">
        <Sidebar />
        <Chats />
      </div>
    </div>
  );
};

export default Home;
