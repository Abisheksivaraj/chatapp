import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 
import "animate.css";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="login">
      <div className="left-container">
        <img
          src="src/images/hlo-removebg-preview.png"
          alt=""
          className="logo"
        />
        <div className="slogan">
          <h2 data-text="Login.Chat.Connect">Login.Chat.Connect</h2>
        </div>
      </div>

      <div className="right-container">
        <div className="details">
          <br />
          <div className="title">Login </div>
          <br />
        </div>
        <div className="form-details">
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="mail">
                <IoMdMail />
              </label>
              <input
                type="email"
                className="inp-style"
                placeholder="Enter your email"
              />
            </div>
            <br />
            <div className="input-field">
              <label htmlFor="mail">
                <RiLockPasswordFill />
              </label>
              <input
                type="password"
                className="inp-style"
                placeholder="Enter your password"
              />
            </div>
            <div className="entry">
              <button className="sign" type="submit">
                Login
              </button>
            </div>
            <br />
            {err && <span className="wrong">Something went wrong...!</span>}
          </form>
        </div>

        <br />
        <div className="button-details">
          <div className="signs">
            <div className="reg">
              <p>Dont have an account?</p>
              <a className="up">
                <Link to="/register">Register</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
