import React, { useContext, useEffect } from 'react'
import { AuthContext } from "../context/Authcontext";


const Messagebox = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div className={`message ${senderId === currentUser.uid}` && "owner"}>
      <div className="msg-info">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="msg-img"
        />

        <span className="now">Just now</span>
      </div>
      <div className="msg-content">
        <p className="para">{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Messagebox;