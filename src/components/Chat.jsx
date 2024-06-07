// components/Chat.js
import React, { useState } from "react";
import "../App.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageList([...messageList, message]);
    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="message-list">
        {messageList.map((msg, index) => (
            <div key={index} className="message">
                <img className="sender-icon" src="https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/kamisato_ayaka/image.png?strip=all&quality=100"></img> 
                <div>
                <div className="sender-name">Ayaka</div> 
              <div className="message-text">{msg}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
        />
       
      </form>
    </div>
  );
};

export default Chat;
