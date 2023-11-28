import React from 'react'

import user1 from "../images/1.jpg"

import "../styles/Chatbox.css";

const Chatbox = () => {
  return (
    <div className="side-chats">
      <div className="user-chat">
        <img src={user1} alt="" className="client" />
        <div className="user-info">
          <span className="chat-name">Abishek</span>
          <p className="cht">hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={user1} alt="" className="client" />
        <div className="user-info">
          <span className="chat-name">Abishek</span>
          <p className="cht">hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={user1} alt="" className="client" />
        <div className="user-info">
          <span className="chat-name">Abishek</span>
          <p className="cht">hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={user1} alt="" className="client" />
        <div className="user-info">
          <span className="chat-name">Abishek</span>
          <p className="cht">hello</p>
        </div>
      </div>
</div>

  );
}

export default Chatbox;