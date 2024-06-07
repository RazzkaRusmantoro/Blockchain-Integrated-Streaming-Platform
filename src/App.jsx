import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div className="app-container">
      <VideoPlayer />
      <Chat />
    </div>
  );
};

export default App;
