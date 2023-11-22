import React from 'react'

const login = () => {
  return (
    <div className="registration">
      <div className="form-details">
        {<img src={image1} alt="" className="profile-logo" />}
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

export default login