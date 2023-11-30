import React from "react";
import "../styles/Chats.css";
import Message from "./Messages"
import Input from "./Input";


import { IoVideocam } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";





const Chats = () => {
  return (
    <div className="chat">
      <div className="info">
        <div className="chat-name">
          <div className="img-name">
            <img src="src/images/1.jpg" className="image" alt="" />
          </div>
          <span className="name">Bala</span>
        </div>
        <div className="icons">
          <div className="video">
            <IoVideocam />
          </div>

          <div className="call">
            <FaPhoneAlt />
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
