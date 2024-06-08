import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import "../App.css";
import { IoPersonOutline } from "react-icons/io5";

const VideoPlayer = () => {
  const [video, setVideo] = useState("");
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [team, setTeam] = useState(1);

  useEffect(() => {
    setPlayers([
      "https://www.youtube.com/watch?v=ycAepSv65Mo",
      "https://www.youtube.com/watch?v=yx-3su3Pmeo",
      "https://www.youtube.com/watch?v=GmKD3-ChSYI",
      "https://www.youtube.com/watch?v=ycAepSv65Mo",
      "https://www.youtube.com/watch?v=yx-3su3Pmeo",
    ]);
    setVideo("https://www.youtube.com/watch?v=yx-3su3Pmeo");
  }, []);

  const handleSwitchPlayer = (index) => {
    setVideo(players[index]);
    setCurrentPlayer(index);
  };

  return (
    <>
      <div className="video-container">
        <ReactPlayer
          playing={true}
          light={true}
          className="react-player"
          url={video}
          width="100%"
          height="100%"
        />
        <div
        className="button-container"
        style={
          team ? { backgroundColor: "rgba(0, 0, 255, 0.21)" } : { backgroundColor: "#FF7074" }
        }
      >
        <div className='icon-container' onClick={() => setTeam(!team)}><IoPersonOutline />
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
