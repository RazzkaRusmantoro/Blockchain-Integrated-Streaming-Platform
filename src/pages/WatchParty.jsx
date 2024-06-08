import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import Chat from "../components/Chat";

const WatchParty = () => {
  return (
    <div className="watch-party-page">
      <div className="watch-party-container">
      <p className="watch-party-title">WATCH PARTY</p>
        <VideoPlayer />
        <Chat />
      </div>
      <p className="watch-party-title-2">GAME NAME: MATCH TITLE TEAM VS TEAM</p>
    </div>
  );
};

export default WatchParty;
