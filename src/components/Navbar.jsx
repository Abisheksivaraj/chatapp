import React from 'react'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-nav">Chat Hub...!</div>

      <div className="client-img">
        <img src="" alt="" />
      </div>
      <span>Abishek</span>
      <button className="logout">
        logout
        <img
          src="https://t4.ftcdn.net/jpg/00/77/21/45/360_F_77214592_nwi23yr4rsRsuA0yy6FspW7AiRFTq5NU.jpg"
          alt=""
        />
      </button>
    </div>
  );
}

export default Navbar