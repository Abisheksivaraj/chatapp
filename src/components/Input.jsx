import React from "react";
import { IoSendSharp } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineAttachFile } from "react-icons/md";
import "../styles/Input.css";

const Input = () => {
  return (
    <div className="input">
      <div className="msg">
        <span className="attach">
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file" className="ment">
            <MdOutlineAttachFile />
          </label>
        </span>
        <input type="text" placeholder="Message" className="text-box" />
      </div>
      <div className="send">
        <span className="emoji">
          <BsEmojiSmile />
        </span>

        <span className="snd">
          <IoSendSharp />
        </span>
      </div>
    </div>
  );
};

export default Input;

{
  /* <span className="emoji">
          <BsEmojiSmile />
        </span> */
}

{
  /* <span className="add-image">
          <FcAddImage /> */
}

// <a className="snd">
// <IoIosSend />
