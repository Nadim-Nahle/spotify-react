import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Search.css";
import axios from "axios";

const Search = () => {
  const [serachInput, setSearchInput] = useState("");
  const [artistData, setArtistData] = useState([]);

  const options = {
    method: "GET",
    url: `https://api.spotify.com/v1/search?q=${serachInput}&type=artist`,
    headers: {
      Authorization: `Bearer BQDrCuzdTygAUXgjceFUgVMeOne9FzpZMny1HZJHQEoJkr69Zj8JLTSdwoZ7OS1TdvVeThaU7qCfO4O7q0rdqRxwpph6RMI2jjgqqxMmX7w4TRNHAWOB0vAWiUsJjyQUhBaO4cZylGW6c2IYdeEgatiQM6mXuwIQce7cxRix-zIvHy1eFiePmgNpc9YYciQghT4cP3Uo2VDu-w6XX7A`,
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
