import React from "react";
import Countdown from 'react-countdown';
import homeImage from "../assets/homepage.jpg";

const Home = () => {
  const targetTime = Date.now() + 1 * 60 * 60 * 1000 + 47 * 60 * 1000 + 12 * 1000;

  const renderer = ({ hours, minutes, seconds }) => (
    <span className="countdown">{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
  );

  return (
    <div className="home-container">
      <img src={homeImage} alt="Homepage" className="home-img" />
      <div className="home-text">
        <div class="text-container">
          {/* <p className="text-bottom">VALORANT</p> */}
          <p className="text-top">NOW LIVE</p>
          <Countdown date={targetTime} renderer={renderer} />
        </div>
        <button className="start-connection">Start Connection</button>
      </div>
    </div>
  );
};

export default Home;
