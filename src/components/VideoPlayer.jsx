import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import '../App.css';

const VideoPlayer = () => {
  const [video, setVideo] = useState('https://www.youtube.com/watch?v=yx-3su3Pmeo');
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handleSwitchPlayer = () => {
    if (currentPlayer === 1) {
      setVideo('https://www.youtube.com/watch?v=ycAepSv65Mo');
      setCurrentPlayer(2);
    } else {
      setVideo('https://www.youtube.com/watch?v=yx-3su3Pmeo');
      setCurrentPlayer(1);
    }
  };

  return (
    <div className="video-container">
      <ReactPlayer 
        playing={true}
        light={true}
        className='react-player'
        url={video}
        width='90%'
        height='90%'
      />
      <button onClick={handleSwitchPlayer}>
        {currentPlayer === 1 ? 'Player 1' : 'Player 2'}
      </button>
    </div>
  );
};

export default VideoPlayer;
