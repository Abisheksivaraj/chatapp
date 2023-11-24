import React from "react";
import '../styles/Register.css'

import image1 from "../images/profile.webp"

import image2 from "../images/addavatar.png"



const register = () => {
  return (
    <div className="registration">
      <div className="form-details">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQB26LlkocXak8CUJDtmMeNHZ5irKtYw8xXJDTy-NoO4HRfXhbWpqa0zz00qfZ2ejpKk&usqp=CAU"
          alt=""
          className="profile-logo"
        />
        <div className="logo">Chat Hub...!</div>
        <br />
        <div className="title">Register Here </div>
        <br />
        <form action="#">
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
        </form>
        <p>
          <h3>
            Already registered...?{" "}
            <span className="log">
              <a href="">Login</a>
            </span>
          </h3>
        </p>
      </div>
    </div>
  );
}

export default register