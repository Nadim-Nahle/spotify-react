import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-content" onClick={() => navigate("/")}>
        Spotify Artist Search
      </div>
    </div>
  );
};

export default Navbar;
