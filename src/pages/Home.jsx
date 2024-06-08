import React from "react";
import Countdown from "react-countdown";
import homeImage from "../assets/homepage.jpg";
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
          <button
            onClick={() => {
              navigate("/watch-party");
            }}
            className="start-connection"
          >
            Start Connection
          </button>
        </div>
      </div>
      <div className="events-container">
        <p className="text-events">CONNECT WITH OTHER EVENTS</p>
      </div>
    </>
  );
};

export default Home;
