import React, { useContext } from "react";
import Message from "./Messages";
import Input from "./Input";
import { IoVideocam } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { ChatContext } from "../context/ChatContext";
import "../styles/Chats.css";

const Chats = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="info">
        <div className="chat-name">
          <div className="img-name">
            <img src={data.user.photoURL} className="image" alt="User" />
          </div>
          <span className="name">{data.user?.displayName}</span>
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
