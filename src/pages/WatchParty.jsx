import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import Chat from "../components/Chat";

const WatchParty = () => {
  return (
    <div className="watch-party-container">
      <VideoPlayer />
      <Chat />
    </div>
  );
};

export default WatchParty;
