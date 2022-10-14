import React from "react";
import "./Login.css";

const CLIENT_ID = "105a826077134eff89ba8d64e0480807";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "http://localhost:300/callback";

const Login = () => {
  return (
    <div className="login">
      <button className="login-btn">Login</button>
    </div>
  );
};

export default Login;
