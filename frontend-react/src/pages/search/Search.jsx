import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search-center">
        <input
          className="search-input"
          type="text"
          placeholder="Search for an artist          &#xf007;"
        />
      </div>
    </div>
  );
};

export default Search;
