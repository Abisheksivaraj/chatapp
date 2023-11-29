import React from "react";
import { useState } from "react";
import "../styles/Register.css";
import image2 from "../images/addavatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const yourName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, yourName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              yourName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              yourName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {}), navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="registration">
      <div className="form-details">
        <div className="logo">Chat Hub...!</div>
        <br />
        <div className="title">Register Here </div>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            {" "}
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              className="inp-style"
              placeholder="Enter your name"
            />
          </div>
          <br />

          <div className="input-field">
            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              className="inp-style"
              placeholder="Enter your mail"
            />
          </div>
          <br />
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="inp-style"
              placeholder="Enter your password"
            />
          </div>
          <br />
          <div className="input-field">
            <input style={{ display: "none" }} id="file" type="file" />
            <label htmlFor="file">
              <img src={image2} alt="" className="add" />
              <span>add an image</span>
            </label>
          </div>

          <button className="sign">Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          <h3>
            Already registered...?{" "}
            <span className="log">
              <a href="">
                {" "}
                <Link to="/login">Login</Link>
              </a>
            </span>
          </h3>
        </p>
      </div>
    </div>
  );
};

export default register;
