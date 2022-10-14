import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [serachInput, setSearchInput] = useState("");
  return (
    <div className="search">
      <div className="search-center">
        <form>
          <input
            className="search-input"
            type="text"
            placeholder="Search for an artist"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                console.log("good");
              }
            }}
            onChange={(e) => setSearchInput(e.currentTarget.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
