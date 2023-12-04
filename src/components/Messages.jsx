import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import React, { useContext, useEffect, useState } from "react";
import "../styles/messages.css";
import { ChatContext } from "../context/ChatContext";
// import { onSnapshot } from "firebase/firestore";
import Messagebox from "./Messagebox";

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

  return (
    <div className="messages">
      {messages.map((m) => (
        <Messagebox message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
