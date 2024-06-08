import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { IoPersonOutline } from "react-icons/io5";
import "../App.css";

import forsakenVideo from "../assets/forsaken.mp4";
import jingggVideo from "../assets/jinggg.mp4";
import d4v41Video from "../assets/d4v41.mp4";
import mindfreakVideo from "../assets/mindfreak.mp4";
import somethingVideo from "../assets/something.mp4";

const VideoPlayer = () => {
  const [video, setVideo] = useState("");
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [team, setTeam] = useState(1);
  let videoRef;

  useEffect(() => {
    setPlayers([
      forsakenVideo,
      jingggVideo,
      d4v41Video,
      mindfreakVideo,
      somethingVideo,
    ]);
    setVideo(forsakenVideo);
  }, []);

  useEffect(() => {
    if (videoRef) {
      videoRef.play();
    }
  }, [video]);

  const handleSwitchPlayer = (index) => {
    setVideo(players[index]);
    setCurrentPlayer(index);
  };

  return (
    <>
      <div className="video-container">
        <video
          ref={(ref) => (videoRef = ref)}
          src={video}
          autoPlay
          width="100%"
          height="100%"
        />
        <div
          className="button-container"
          style={
            team ? { backgroundColor: "#201C2C" } : { backgroundColor: "#66274D" }
          }
        >
          <div className='icon-container' onClick={() => setTeam(!team)}>
            <IoPersonOutline />
          </div>
          {players.map((player, index) => (
            <button
              key={index}
              onClick={() => handleSwitchPlayer(index)}
              className={
                currentPlayer === index ? "button-active" : "button-inactive"
              }
            >
              Player {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;


