// import React, { useContext, useEffect, useState } from "react"; // Added useState
// import Messagebox from "./Messagebox";
// import "../styles/messages.css";
// import { ChatContext } from "../context/Chatcontext";
// import { onSnapshot, doc } from "firebase/firestore"; // Added doc
// import { db } from "../your-firebase-config-file"; // Import your Firebase config file
import React, { useContext, useEffect } from "react";
import Message from "./Messagebox";
import "../styles/messages.css";
import { ChatContext } from "../context/Chatcontext";
import { onSnapshot } from "firebase/firestore";


const Messages = () => {
  const [messages, setMessages] = useState([]); // Added useState
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages); // Assuming messages is an array in your data
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} /> // Assuming m has an id property
      ))}
    </div>
  );
};

export default Messages;
