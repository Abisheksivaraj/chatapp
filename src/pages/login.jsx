import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
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
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="registration">
      <div className="left-container">
        <img
          src="src/images/chatting-bubbles-icon-vector-removebg-preview.png"
          alt=""
          className="back"
        />

        <span className="logo">
          <h3></h3>
        </span>
        <p className="animate__animated animate__zoomInUp" id="animate">
          Login. Chat. Connect.
        </p>
      </div>

      <div className="form-details">
        <br />
        <div className="title">Login </div>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="email"
              className="inp-style"
              placeholder="Enter your mail"
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
  );
};

export default Login;
