import React from 'react'

import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";

import "../styles/Chats.css";
import Message from './Messagebox';

const Chats = () => {
  return (
    <div className="chat">
      <div className="info">
        <span className="chat-name">Abishek</span>
        <div className="icons">
          <div className="video">
            <IoVideocamOutline />
          </div>

          <div className="call">
            <IoCallOutline />
          </div>
          <div className="more">
            <IoMdMore />
          </div>
        </div>
        <Message/>
      </div>
    </div>
  );
}

export default Chats