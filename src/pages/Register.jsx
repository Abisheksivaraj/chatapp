import React from "react";
import '../styles/Register.css'



import image2 from "../images/addavatar.png"

import {createUserWithEmailAndPassword } from "firebase/auth";
import{auth} from "../firebase"

const register = () => {


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const yourName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value[0];


  try{
  const res = await createUserWithEmailAndPassword(auth, email, password);
  }catch(err){


  }

  }
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

export default register;