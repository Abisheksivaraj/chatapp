import React from "react";
import './register.css'

import image1 from "./images/img1.webp"



const register = () => {
  return (
    <div className="registration">
      <div className="form-details">
        <img
          src={image1}
          alt=""
          className="profile-logo"
        />
        <div className="logo">Chat Hub...!</div>
        <br />
        <div className="title">Register Here </div>
        <br />
        <form action="#">
          <label htmlFor="name">Your name</label>
          <input type="text" placeholder="Enter your name" />

          <label htmlFor="dob">date-Of-Birth</label>
          <input type="date" placeholder="Enter your DOB" />

          <label htmlFor="gender">Gender</label>
          <span>
            <input type="radio" name="name1" value="value1" />
            <input type="radio" name="name2" value="value2" />
          </span>

          <label htmlFor="mail">E-mail</label>
          <input type="email" placeholder="Enter your mail" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" />
          <label htmlFor="file"></label>
          <input type="file" />
          <button>Sign up</button>
        </form>
        <p>
          <h3>
            Already registered...? <span className="log">Login</span>{" "}
          </h3>
        </p>
      </div>
    </div>
  );
}

export default register