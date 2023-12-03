import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 
import "animate.css";

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
    <div className="registration">
      <div className="container">
        <div className="left-container">
          <img
            src="src/images/hlo-removebg-preview.png"
            alt=""
            className="logo"
          />
        </div>

        <div className="slogan">
          <h2 data-text="Login.Chat.Connect">Login.Chat.Connect</h2>
        </div>

        <div className="right-container">
          <div className="form-details">
            <br />
            <div className="bg-color"></div>
            <div className="title">Login </div>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  type="email"
                  className="inp-style"
                  placeholder="Enter your email"
                />
              </div>
              <br />
              <div className="input-field">
                <input
                  type="password"
                  className="inp-style"
                  placeholder="Enter your password"
                />
              </div>
              <br />
              <div className="signs">
                <button className="sign" type="submit">
                  Login
                </button>

                <button className="up">
                  <Link to="/register">Register</Link>
                </button>
              </div>

              {err && <span>Something went wrong</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
