import React, { useEffect, useState } from "react";
import Card from "../../components/card/ArtistCard";
import "./Search.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};

const Search = () => {
  const { setAuth } = useAuth();
  const { setKey } = useAuth();
  const { key } = useAuth();
  const searchKey = key.newUrl;

  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromSpotifyAuth(
        window.location.hash
      );
      localStorage.setItem("accessToken", access_token);
    }
  });
  const [serachInput, setSearchInput] = useState(searchKey ? searchKey : "");
  const [artistData, setArtistData] = useState([]);
  const access_token = localStorage.getItem("accessToken");

  const renderArtists = () =>
    artistData.map((artist) => (
      <Card key={artist.id} artist={artist} getAlbums={getAlbums} />
    ));

  async function handleSearch(e) {
    const options = {
      method: "GET",
      url: `https://api.spotify.com/v1/search?q=${serachInput}&type=artist`,
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios(options);
      const url = res.request?.responseURL;
      var newUrl = url.substring(url.indexOf("=") + 1, url.lastIndexOf("&"));
      setKey({ newUrl });
      setArtistData(res.data.artists.items);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAlbums(artist) {
    const options = {
      method: "GET",
      url: `https://api.spotify.com/v1/artists/${artist.id}/albums`,
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios(options);
      let authAlbum = data.items;
      setAuth({ authAlbum });
      navigate("/album");
    } catch (err) {
      console.log(err);
    }
  }

  const changeStyle = (e) => {
    e.currentTarget.style.top = "10px";
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <>
      <>
        <div className="search">
          <div className="search-center">
            <form onSubmit={handleSearch}>
              <input
                className={searchKey ? "search-input-new" : "search-input"}
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
                onFocus={changeStyle}
                value={serachInput}
              />
            </form>
          </div>
        </div>

        <div className="card-container">{renderArtists()}</div>
      </>
    </>
  );
};

export default Search;
