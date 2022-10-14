import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./Search.css";
import axios from "axios";

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};

const Search = () => {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });
  const [serachInput, setSearchInput] = useState("");
  const [artistData, setArtistData] = useState([]);
  const access_token = localStorage.getItem("accessToken");
  const options = {
    method: "GET",
    url: `https://api.spotify.com/v1/search?q=${serachInput}&type=artist`,
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const renderArtists = () =>
    artistData.map((artist) => <Card key={artist.id} artist={artist} />);

  async function handleSearch(e) {
    try {
      const { data } = await axios(options);
      //console.log(data.artists.items[0].images[0].url);
      setArtistData(data.artists.items);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="search">
        <div className="search-center">
          <form onSubmit={handleSearch}>
            <input
              className="search-input"
              type="text"
              placeholder="Search for an artist"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              onChange={(e) => {
                setSearchInput(e.currentTarget.value);
                handleSearch();
              }}
            />
          </form>
        </div>
      </div>
      <div className="card-container">{renderArtists()}</div>
    </>
  );
};

export default Search;
