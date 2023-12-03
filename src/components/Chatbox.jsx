// ... (previous imports)
import React, { useContext, useEffect, useState } from "react";
import user1 from "../images/1.jpg";
import "../styles/Chatbox.css";
import { signOut } from "firebase/auth";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/Authcontext";
import { Link } from "react-router-dom";

const Chatbox = () => {
  const [chats, setChats] = useState([]);
  
const { currentUser } = useContext(AuthContext);
const { dispatch } = useContext(chatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", currentUser.uid),
        (snapshot) => {
          // Use the snapshot to update the state
          setChats(snapshot.data());
        }
      );

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER",payload:u})
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div className="user-chat" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img src={chat[1].userInfo.photoURL} alt="" className="client" />
          <div className="user-info">
            <span className="chat-name">{chat[1].userInfo.displayName}</span>
            <p className="cht">{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
      <div className="logout">
        <a href="/" onClick={() => signOut(auth)}>
          <Link to="/login">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4JOEoIPhHs6U5ouuLDfLt1i3x0q0Kh8qnfH7BsqX9c1QzBDvSzvd5pDr9EA-s5Z9Ic8&usqp=CAU"
              alt=""
              className="abii"
            />
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Chatbox;
