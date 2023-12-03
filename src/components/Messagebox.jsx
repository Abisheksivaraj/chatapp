import React, { useContext } from 'react'
import { AuthContext } from '../context/Authcontext';


const Messagebox = (message) => {

  const{currentUser} = useContext(AuthContext)
  
  const { data } = useContext(ChatContext);
  return (
    <div className="message owner">
      <div className="msg-info">
        <img src="src/images/1.jpg" alt="" className="msg-img" />

        <span className="now">Just now</span>
      </div>
      <div className="msg-content">
        <p className="para">Hai</p>
        <img src="src/images/1.jpg" alt="" />
      </div>
    </div>
  );
}

export default Messagebox;