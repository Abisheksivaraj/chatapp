import React from 'react'
import image1 from "../images/profile.webp"
import '../styles/Login.css';
const Login = () => {
  return (
    <div className="registration">
      <div className="form-details">
        {
          <img
            src="https://toppng.com/uploads/preview/thinkingspeech-thought-bubble-icon-png-white-11562893484l37sthh23x.png"
            alt=""
            className="profile-logo"
          />
        }
        <div className="logo">Chat Hub...!</div>
        <br />
        <div className="title">Login </div>
        <br />
        <form action="#">
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
          <button className="sign">Login</button>
        </form>
        <p>
          <h3>
            You dont have account...?
            <span className="log">
              <a href="">Register</a>
            </span>
          </h3>
        </p>
      </div>
    </div>
  );
}

export default Login



// background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);


// background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);

// background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);

// background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);