import React, { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { onSnapshot, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import { AuthContext } from "../context/Authcontext";
import { Link } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import "../styles/Chatbox.css";
import { DarkModeContext } from "../context/themecontext";

const Chatbox = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", currentUser?.uid),
        (doc) => {
          setChats(doc.data());
        }
      );

      return unsub;
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const toggleHandler = () => {
    setDarkMode(darkMode === false ? true : false);
  };

  return (
    <div className="chats">
      {Object?.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="user-chat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo?.photoURL} alt="" className="client" />
            <div className="user-info">
              <span className={darkMode?"chat-name-dark":"chat-name"}>{chat[1].userInfo?.displayName}</span>
              <p className="cht">{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
      <div className="logout">
        <Link to="/login">
          <button className="out">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Chatbox;
