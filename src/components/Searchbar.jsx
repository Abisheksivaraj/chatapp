import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/Search.css";

import {
  collection,
  query,
  where,
  getDocs,
  setDoc, // Corrected import
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/Authcontext";
import { DarkModeContext } from "../context/themecontext";

const Searchbar = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null); // Corrected initial state value
  const [err, setErr] = useState(false); // Corrected initial state value

  const { currentUser } = useContext(AuthContext);

  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const toggleHandler = () => {
    setDarkMode(darkMode === false ? true : false);
  };
  

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  return (
    <div className={darkMode ? "search-dark" : "search"}>
      <div className="box">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor="check" className="search-icon">
            <FaSearch />
          </label>
        </div>
        {err && <span>User not found...!</span>}
        {user && (
          <div className="user-chat" onClick={handleSelect}>
            <img src={user.photoURL} alt="" className="client" />
            <div className="user-info">
              <span>{user.displayName}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
