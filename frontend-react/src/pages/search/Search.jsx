import React, { useEffect, useState } from "react";
import Card from "../../components/card/ArtistCard";
import "./Search.css";
import axios from "axios";
import AlbumCard from "../../components/card/AlbumCard";

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
  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromSpotifyAuth(
        window.location.hash
      );
      localStorage.setItem("accessToken", access_token);
    }
  });
  const [serachInput, setSearchInput] = useState("");
  const [artistData, setArtistData] = useState([]);
  const [artistAlbum, setArtistAlbum] = useState([]);
  const access_token = localStorage.getItem("accessToken");
  const [toggle, setToggle] = useState(true);

  const renderArtists = () =>
    artistData.map((artist) => (
      <Card key={artist.id} artist={artist} getAlbums={getAlbums} />
    ));

  const renderAlbums = () =>
    artistAlbum.map((album) => <AlbumCard key={album.id} album={album} />);

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
      const { data } = await axios(options);
      //console.log(data.artists.items[0].images[0].url);
      setArtistData(data.artists.items);
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
      setArtistAlbum(data.items);
      setToggle(false);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(artistAlbum);

  const changeStyle = (e) => {
    e.currentTarget.style.top = "10px";
  };
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
                setToggle(true);
              }}
              onFocus={changeStyle}
            />
          </form>
        </div>
      </div>
      {toggle ? (
        <div className="card-container">{renderArtists()}</div>
      ) : (
        <div className="card-container">{renderAlbums()}</div>
      )}
    </>
  );
};

export default Search;
