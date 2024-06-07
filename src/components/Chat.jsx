import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const chatBoxRef = useRef(null);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messageList]);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const chatContainerStyle = {
    width: collapsed ? "5%" : "20%", 
  };

  const headerStyle = {
    opacity: 1,
    transition: "opacity 0.5s ease",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    borderBottom: collapsed ? "none" : "2px solid #686868",
  };

  const inputFormStyle = {
    marginRight: collapsed ? "-100px" : "0px",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageList([...messageList, message]);
    setMessage("");
  };

  return (
    <div className={`chat-container`} style={chatContainerStyle}>
      <h1 className="chat-header" style={headerStyle}>
        <button onClick={handleCollapse} className="collapse-button">
          {collapsed ? "<<" : ">>"}
        </button>
        <span>Stream Chat</span> {/* Wrap text in a span for opacity control */}
      </h1>
      {!collapsed && (
        <>
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
          <form onSubmit={handleSubmit} className="input-form" style={inputFormStyle}>
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message..."
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Chat;
