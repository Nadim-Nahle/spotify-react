import React, { useEffect, useState } from "react";
import Card from "../../components/card/ArtistCard";
import "./Search.css";
import axios from "axios";
//import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/filterSlice";

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
  // const { setAuth } = useAuth();
  // const { setKey } = useAuth();
  // const { key } = useAuth();
  // const searchKey = key.newUrl;

  const filter = useSelector((state) => state.searchKey.filter);
  const dispatch = useDispatch();

  const navigate = useNavigate();
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
      dispatch(setFilter("test"));

      //dispatch(setFilter(newUrl));
      setArtistData(res.data.artists.items);
    } catch (err) {}
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
      dispatch(setFilter(data.items));
      //setAuth({ authAlbum });
      navigate("/album");
      console.log("filt", filter);
    } catch (err) {}
  }

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <>
      <>
        <div className="search">
          <div className="search-center">
            <div className={filter ? "new-container" : "container"}>
              <form className="search-from" onSubmit={handleSearch}>
                <input
                  className="search-inputt"
                  type="text"
                  name=""
                  placeholder="Search for an artist..."
                  onChange={(e) => {
                    setSearchInput(e.currentTarget.value);
                    handleSearch();
                  }}
                  value={serachInput}
                />
                <button type="submit" className="search-button">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="card-container">{renderArtists()}</div>
      </>
    </>
  );
};

export default Search;
