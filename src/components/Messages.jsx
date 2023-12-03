
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase"; 
import React, { useContext, useEffect } from "react";
import Message from "./Messagebox";
import "../styles/messages.css";
import { ChatContext } from "../context/ChatContext";
import { onSnapshot } from "firebase/firestore";


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
        <Message message={m} key={m.id} /> // Assuming m has an id property
      ))}
    </div>
  );
};

export default Messages;
