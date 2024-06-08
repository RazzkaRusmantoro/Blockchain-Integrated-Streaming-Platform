import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WatchParty from "./pages/WatchParty";
import "./App.css";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && <Navbar />}
      <div className={`${isHome ? "content" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch-party" element={<WatchParty/>} />
        </Routes>
      </div>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
