import React from "react";
import "./Login.css";

function generateRandomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const CLIENT_ID = "105a826077134eff89ba8d64e0480807";
const REDIRECT_URL = "https://spotify-react-nadim.vercel.app/search";
let STATE = generateRandomString(16);
const SCOPES = "user-read-private user-read-email";

var url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + encodeURIComponent(CLIENT_ID);
url += "&scope=" + encodeURIComponent(SCOPES);
url += "&redirect_uri=" + encodeURIComponent(REDIRECT_URL);
url += "&state=" + encodeURIComponent(STATE);

const Login = () => {
  const handleLogin = () => {
    window.location = url;
  };
  return (
    <div className="login">
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
