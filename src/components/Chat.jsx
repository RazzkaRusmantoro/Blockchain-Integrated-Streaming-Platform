import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messageList]);

  useEffect(() => {
    const joinTimer = setTimeout(() => {
      setMessageList((prevList) => [
        ...prevList,
        { name: "Xiao", message: "joined" }
      ]);

      const hiTimer = setTimeout(() => {
        setMessageList((prevList) => [
          ...prevList,
          { name: "Xiao", message: "hello :D" }
        ]);
      }, 2000);

      return () => clearTimeout(hiTimer);
    }, 3000);

    return () => clearTimeout(joinTimer);
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

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
    setMessageList((prevList) => [
      ...prevList,
      { name: "Ayaka", message }
    ]);
    setMessage("");
  };

  return (
    <div className={`chat-container`} style={chatContainerStyle}>
      <h1 className="chat-header" style={headerStyle}>
        <button onClick={handleCollapse} className="collapse-button">
          {collapsed ? "<<" : ">>"}
        </button>
        <span>Stream Chat</span>
      </h1>
      {!collapsed && (
        <>
          <div className="chat-box" ref={chatBoxRef}>
            <div className="message-list">
              {messageList.map((msgObj, index) => (
                <div key={index} className="message">
                  <img
                    className="sender-icon"
                    src={msgObj && msgObj.name === 'Ayaka' ? "https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/kamisato_ayaka/image.png?strip=all&quality=100" : "https://pbs.twimg.com/media/E6xPYmEX0AMygZg?format=jpg&name=4096x4096"}
                    alt="sender-icon"
                  />
                  <div>
                    <div className="sender-name">{msgObj.name}</div>
                    <div className="message-text">{msgObj.message}</div>
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
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Chat;
