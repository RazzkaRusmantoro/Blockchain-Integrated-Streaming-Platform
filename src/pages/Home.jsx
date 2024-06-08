import React from "react";
import Countdown from "react-countdown";
import homeImage from "../assets/homepage.jpg";
import streamOne from "../assets/stream1.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const targetTime =
    Date.now() + 1 * 60 * 60 * 1000 + 47 * 60 * 1000 + 12 * 1000;

  const renderer = ({ hours, minutes, seconds }) => (
    <span className="countdown">
      {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </span>
  );

  const handleWatchPartyClick = () => {
    navigate('/payment');
  };

  return (
    <>
      <div className="home-container">
        <img src={homeImage} alt="Homepage" className="home-img" />
        <div className="overlay"></div>
        <div className="home-text">
          <div className="text-container">
            <p className="text-top">NOW LIVE</p>
            <Countdown date={targetTime} renderer={renderer} />
          </div>
          <button className="start-connection" onClick={handleWatchPartyClick}>Watch Party</button> {}
        </div>
      </div>
      <div className="events-container">
        <p className="text-events">CONNECT WITH OTHER EVENTS</p>
        <img src={streamOne} className="events-img" />
      </div>
    </>
  );
};

export default Home;
