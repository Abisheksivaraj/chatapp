import React from "react";
import './register.css'

import image1 from "./images/img1.webp"

import image2 from "./images/add.png"



const register = () => {
  return (
    <div className="registration">
      <div className="form-details">
        <img src={image1} alt="" className="profile-logo" />
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

          {/* <div className="input-field">
            <label htmlFor="gender">Gender</label>
            <span>
              <input type="radio" name="name1" value="value1" />
              <input type="radio" name="name2" value="value2" />
            </span>
          </div> */}
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
              <img src={image2}
              alt=""  className="add"/>
              <span>add an image</span>
            </label>
          </div>
          <br />
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