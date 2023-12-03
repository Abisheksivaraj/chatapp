import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css";
import image2 from "../images/addavatar.png";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="registration">
      <div className="form-details">
        <div className="logo">Chat Hub...!</div>
        <br />
        <div className="title">Register Here</div>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="input-field">
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

          <button className="sign" disabled={loading}>
            Sign up
          </button>
          {loading && "Uploading and compressing the image please wait..."}

          {err && <span>Something went wrong</span>}
        </form>
        <p>
          <h3>
            Already registered...?{" "}
            <span className="log">
              <Link to="/login">Login</Link>
            </span>
          </h3>
        </p>
      </div>
    </div>
  );
};

export default Register;
