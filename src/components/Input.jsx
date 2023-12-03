import React, { useState, useContext } from "react";
import { IoSendSharp } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineAttachFile } from "react-icons/md";
import {
  Timestamp,
  arrayUnion,
  updateDoc,
  serverTimestamp,
  doc,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/firestore"; // Add missing imports
import { v4 as uuid } from "uuid";
import { AuthContext } from "../your-auth-context"; // Replace with the actual path to your AuthContext
import { ChatContext } from "../your-chat-context"; // Replace with the actual path to your ChatContext
import { db, storage } from "../your-firebase-config-file"; // Replace with the actual path to your Firebase config file

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // TODO: Handle upload progress
        },
        (error) => {
          // TODO: Handle upload error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div className="input">
      <div className="msg">
        <span className="attach">
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file" className="ment">
            <MdOutlineAttachFile />
          </label>
        </span>
        <input
          type="text"
          placeholder="Message"
          className="text-box"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="send">
        <span className="emoji">
          <BsEmojiSmile />
        </span>

        <span className="snd" onClick={handleSend}>
          <IoSendSharp />
        </span>
      </div>
    </div>
  );
};

export default Input;
