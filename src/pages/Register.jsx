import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";


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
      <div className="left">
        <img
          src="src/images/reg_design-removebg-preview.png"
          alt=""
          className="conversation"
        />
        <div className="slogan">
          <h2 data-text="Connect and meet new people">
            Connect and meet new people
          </h2>
        </div>
      </div>
      <div className="right">
        <div className="formm-details">
          <br />
          <div className="profile">
            <input style={{ display: "none" }} id="file" type="file" />
            <label htmlFor="file">
              <img
                src="src/images/add_profile-removebg-preview.png"
                alt=""
                className="add"
              />
            </label>
          </div>
          <br />
            <form onSubmit={handleSubmit}>
              <div className="inputt-field">
                <label htmlFor="name">
                  <FaUser />
                </label>
                <input
                  type="text"
                  className="inp-style"
                  placeholder="Enter your name"
                />
              </div>
              <br />

              <div className="inputt-field">
                <label htmlFor="mail">
                  <IoMdMail />
                </label>
                <input
                  type="email"
                  className="inp-style"
                  placeholder="Enter your mail"
                />
              </div>
              <br />
              <div className="inputt-field">
                <label htmlFor="password">
                  <RiLockPasswordFill />
                </label>
                <input
                  type="password"
                  className="inp-style"
                  placeholder="Enter your password"
                />
              </div>
              <br />

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
      </div>
  );
};

export default Register;
