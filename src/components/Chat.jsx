// components/Chat.js
import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const chatBoxRef = useRef(null); // created a reference for chat box

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


  // implemented useEffect hook to scroll to bottom of the chat when a new message enters the chat
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messageList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageList([...messageList, message]);
    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box" ref={chatBoxRef}>
        <div className="message-list">
          {messageList.map((msg, index) => (
            <div key={index} className="message">
              <img
                className="sender-icon"
                src="https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/kamisato_ayaka/image.png?strip=all&quality=100"
                alt="sender-icon"
              />
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
