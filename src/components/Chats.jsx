import React, { useContext, useState } from "react";
import Message from "./Messages";
import Input from "./Input";
import { IoVideocam } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { ChatContext } from "../context/ChatContext";
import "../styles/Chats.css";
import { DarkModeContext } from "../context/themecontext";

const Chats = () => {
  const { data } = useContext(ChatContext);
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const toggleHandler = () => {
    setDarkMode(darkMode === false ? true : false);
  };

  return (
    <div className={darkMode ? "chat-dark" : "chat"}>
      <div className={darkMode ? "info-dark" : "info"}>
        <div className="chat-name">
          <div className="img-name">
            <img src={data.user.photoURL} className="image" alt="user" />
          </div>
          <span className={darkMode ? "name-dark" : "name"}>
            {data.user?.displayName}
          </span>
        </div>
        <div className="icons">
          <div className="video">
            <IoVideocam />
          </div>
          <div className="call">
            <IoMdCall />
          </div>
          <div className="more">
            <IoMdMore />
          </div>
        </div>
      </div>
      <Message />
      <Input />
    </div>
  );
};

export default Chats;
