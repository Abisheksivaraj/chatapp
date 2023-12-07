import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import React, { useContext, useEffect, useState } from "react";
import "../styles/messages.css";
import { ChatContext } from "../context/ChatContext";
import Messagebox from "./Messagebox";
import { DarkModeContext } from "../context/themecontext";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const toggleHandler = () => {
    setDarkMode(darkMode === false ? true : false);
  };

  return (
    <div className={darkMode ? "messages-dark" : "messages"}>
      {messages.map((m) => (
        <Messagebox message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
