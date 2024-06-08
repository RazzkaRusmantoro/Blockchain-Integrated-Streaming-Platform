import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import Chat from "../components/Chat";

const WatchParty = () => {
  return (
    <div className="watch-party-page">
      <div className="watch-party-header">
        <p className="watch-party-title">WATCH PARTY</p>
        <div className="red-dot">  </div> <span className="live">LIVE</span>
      </div>
      <div className="watch-party-container">
        <VideoPlayer />
        <Chat />
      </div>
      {/* <div className="watch-party-footer">
      <p className="watch-party-title-2">GAME NAME: MATCH TITLE TEAM VS TEAM</p>
      </div> */}
    </div>
  );
};

export default WatchParty;
